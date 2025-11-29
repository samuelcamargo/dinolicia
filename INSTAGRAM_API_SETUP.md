# 📸 Configuração da API do Instagram

## Status Atual

O sistema está configurado para buscar automaticamente as fotos do Instagram do perfil `@dino_licia`. A implementação atual tenta buscar o feed público, mas devido às políticas do Instagram, pode não funcionar em todos os casos.

## Como Funciona

1. **API Route**: `/app/api/instagram/route.ts` - Busca as fotos do Instagram
2. **Componente Gallery**: Atualiza automaticamente quando a página carrega
3. **Cache**: As fotos são armazenadas em cache por 1 hora para melhor performance
4. **Fallback**: Se não conseguir buscar, mostra placeholders

## Para Produção (Recomendado)

Para garantir que as fotos sejam sempre carregadas, recomenda-se usar a **Instagram Basic Display API** ou **Instagram Graph API**. Aqui estão as opções:

### Opção 1: Instagram Basic Display API (Mais Simples)

1. Acesse: https://developers.facebook.com/apps/
2. Crie um novo app do tipo "Consumer"
3. Adicione o produto "Instagram Basic Display"
4. Configure as URLs de redirecionamento
5. Obtenha o Access Token
6. Atualize a API route com o token

### Opção 2: Instagram Graph API (Para Contas de Negócio)

1. Conecte a conta do Instagram ao Facebook Business
2. Crie um app no Facebook Developers
3. Obtenha o Access Token
4. Use o endpoint: `https://graph.instagram.com/{user-id}/media`

### Opção 3: Usar um Serviço de Terceiros

- **Apify Instagram Scraper**: https://apify.com/apify/instagram-scraper
- **RapidAPI Instagram**: https://rapidapi.com/hub
- **Instagram Private API**: Requer autenticação mais complexa

## Configuração Rápida (Método Atual)

O método atual funciona tentando buscar o feed público. Se não funcionar:

1. As fotos não serão carregadas automaticamente
2. O sistema mostrará placeholders
3. Os usuários podem clicar no botão para seguir no Instagram

## Testando

Para testar se está funcionando:

1. Execute: `npm run dev`
2. Acesse: `http://localhost:3000/galeria`
3. Verifique se as fotos aparecem ou se mostra placeholders
4. Verifique o console do navegador para erros

## Atualização Manual (Alternativa)

Se a API automática não funcionar, você pode:

1. Editar `components/sections/Gallery.tsx`
2. Substituir o array `galleryImages` com URLs diretas das fotos do Instagram
3. As URLs das fotos do Instagram podem ser obtidas clicando com botão direito na foto e "Copiar endereço da imagem"

## Notas Importantes

- ⚠️ Instagram pode bloquear requisições automáticas
- ✅ O sistema tem fallback para placeholders
- ✅ Os usuários sempre podem acessar o Instagram diretamente
- 🔄 Cache de 1 hora reduz requisições desnecessárias

