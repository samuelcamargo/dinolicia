import { NextResponse } from "next/server";

interface InstagramPost {
  id: string;
  url: string;
  alt: string;
  permalink: string;
}

// Cache para evitar muitas requisições
let cachedPosts: InstagramPost[] = [];
let lastFetch = 0;
const CACHE_DURATION = 3600000; // 1 hora em milissegundos

export async function GET() {
  try {
    // Verificar cache
    const now = Date.now();
    if (cachedPosts.length > 0 && now - lastFetch < CACHE_DURATION) {
      return NextResponse.json({ 
        success: true, 
        posts: cachedPosts,
        cached: true
      });
    }

    const username = "dino_licia";
    
    // Método 1: Tentar buscar via API pública do Instagram
    // Nota: Instagram mudou suas políticas, então este método pode não funcionar sempre
    // Para produção, recomenda-se usar Instagram Basic Display API ou Graph API
    
    try {
      // Tentar buscar o perfil público
      const profileResponse = await fetch(
        `https://www.instagram.com/${username}/?__a=1&__d=dis`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "*/*",
            "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "Referer": `https://www.instagram.com/${username}/`,
          },
          next: { revalidate: 3600 } // Revalidar a cada hora
        }
      );

      if (profileResponse.ok) {
        const data = await profileResponse.json();
        
        // Extrair posts do feed (estrutura pode variar)
        let posts: any[] = [];
        
        if (data?.graphql?.user?.edge_owner_to_timeline_media?.edges) {
          posts = data.graphql.user.edge_owner_to_timeline_media.edges;
        } else if (data?.user?.edge_owner_to_timeline_media?.edges) {
          posts = data.user.edge_owner_to_timeline_media.edges;
        }

        if (posts.length > 0) {
          const formattedPosts: InstagramPost[] = posts.slice(0, 12).map((edge: any, index: number) => {
            const node = edge.node;
            const caption = node.edge_media_to_caption?.edges?.[0]?.node?.text || 
                           node.caption || 
                           `Dinolícia - Post ${index + 1}`;
            
            return {
              id: node.id || `post-${index}`,
              url: node.display_url || node.thumbnail_src || node.display_src || "",
              alt: caption.substring(0, 100), // Limitar tamanho
              permalink: `https://www.instagram.com/p/${node.shortcode}/`,
            };
          }).filter((post: InstagramPost) => post.url !== ""); // Filtrar posts sem imagem

          if (formattedPosts.length > 0) {
            cachedPosts = formattedPosts;
            lastFetch = now;
            
            return NextResponse.json({ 
              success: true, 
              posts: formattedPosts 
            });
          }
        }
      }
    } catch (apiError) {
      console.log("Método 1 falhou, tentando método alternativo...");
    }

    // Método 2: Tentar via embed/JSON
    try {
      const embedResponse = await fetch(
        `https://www.instagram.com/${username}/embed/`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        }
      );

      if (embedResponse.ok) {
        const html = await embedResponse.text();
        // Extrair dados do JSON embutido no HTML
        const jsonMatch = html.match(/window\._sharedData\s*=\s*({.+?});/);
        
        if (jsonMatch) {
          const sharedData = JSON.parse(jsonMatch[1]);
          const posts = sharedData?.entry_data?.ProfilePage?.[0]?.graphql?.user?.edge_owner_to_timeline_media?.edges || [];
          
          if (posts.length > 0) {
            const formattedPosts: InstagramPost[] = posts.slice(0, 12).map((edge: any, index: number) => {
              const node = edge.node;
              return {
                id: node.id || `post-${index}`,
                url: node.display_url || node.thumbnail_src || "",
                alt: node.edge_media_to_caption?.edges?.[0]?.node?.text || `Dinolícia - Post ${index + 1}`,
                permalink: `https://www.instagram.com/p/${node.shortcode}/`,
              };
            }).filter((post: InstagramPost) => post.url !== "");

            if (formattedPosts.length > 0) {
              cachedPosts = formattedPosts;
              lastFetch = now;
              
              return NextResponse.json({ 
                success: true, 
                posts: formattedPosts 
              });
            }
          }
        }
      }
    } catch (embedError) {
      console.log("Método 2 falhou");
    }

    // Se ambos os métodos falharem, retornar array vazio
    // O componente Gallery usará placeholders como fallback
    return NextResponse.json({ 
      success: false, 
      posts: [],
      message: "Não foi possível carregar as fotos automaticamente. Por favor, siga-nos no Instagram @dino_licia para ver nossas fotos!" 
    });

  } catch (error) {
    console.error("Erro ao buscar fotos do Instagram:", error);
    
    return NextResponse.json({ 
      success: false, 
      posts: [],
      message: "Erro ao carregar fotos do Instagram. Tente novamente mais tarde." 
    });
  }
}
