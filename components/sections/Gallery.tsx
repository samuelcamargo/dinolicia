"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Instagram, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  url: string;
  alt: string;
  permalink?: string;
}

export default function Gallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        setLoading(true);
        const response = await fetch("/api/instagram");
        const data = await response.json();

        if (data.success && data.posts.length > 0) {
          setPosts(data.posts);
        } else {
          // Fallback: usar fotos locais se não conseguir buscar do Instagram
          setPosts([
            {
              id: "1",
              url: "/images/dinolicia1.png",
              alt: "Dinolícia - Buffet Infantil e Delivery Jurássico",
              permalink: "https://www.instagram.com/dino_licia",
            },
            {
              id: "2",
              url: "/images/dinolicia2.png",
              alt: "Dinolícia - Pacotes de Festa e Salgadinhos",
              permalink: "https://www.instagram.com/dino_licia",
            },
            {
              id: "3",
              url: "/images/dinolicia3.png",
              alt: "Dinolícia - Delivery no iFood",
              permalink: "https://www.instagram.com/dino_licia",
            },
          ]);
          // Não mostrar erro se estamos usando as fotos locais
          if (data.message && !data.message.includes("fotos locais")) {
            setError(null); // Não mostrar erro, pois temos fotos locais
          }
        }
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
        // Usar fotos locais em caso de erro
        setPosts([
          {
            id: "1",
            url: "/images/dinolicia1.png",
            alt: "Dinolícia - Buffet Infantil e Delivery Jurássico",
            permalink: "https://www.instagram.com/dino_licia",
          },
          {
            id: "2",
            url: "/images/dinolicia2.png",
            alt: "Dinolícia - Pacotes de Festa e Salgadinhos",
            permalink: "https://www.instagram.com/dino_licia",
          },
          {
            id: "3",
            url: "/images/dinolicia3.png",
            alt: "Dinolícia - Delivery no iFood",
            permalink: "https://www.instagram.com/dino_licia",
          },
        ]);
        setError(null); // Não mostrar erro, pois temos fotos locais
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, []);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Confira nossos eventos e delícias jurássicas!">
          📸 Galeria Jurássica
        </SectionTitle>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-primary-500" size={48} />
          </div>
        ) : (
          <>
            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-center">
                <p className="text-yellow-800">{error}</p>
              </div>
            )}

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {posts.map((post, index) => (
                  <motion.a
                    key={post.id}
                    href={post.permalink || `https://www.instagram.com/dino_licia`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-square block"
                  >
                    <Image
                      src={post.url}
                      alt={post.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-semibold line-clamp-2">{post.alt}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Nenhuma foto encontrada. Siga-nos no Instagram para ver nossas delícias!
                </p>
              </div>
            )}
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/dino_licia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={24} />
            <span>Siga-nos no Instagram @dino_licia</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
