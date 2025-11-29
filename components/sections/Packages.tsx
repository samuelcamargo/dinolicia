"use client";

import SectionTitle from "@/components/SectionTitle";
import PackageCard from "@/components/PackageCard";
import { motion } from "framer-motion";

export default function Packages() {
  const packages = [
    {
      title: "PACOTE - MINI DINO",
      features: [
        "Ideal para festas pequenas",
        "500 salgadinhos fritos na hora",
        "1 cascata deliciosa (doce ou salgado)",
      ],
      color: "green" as const,
      isPopular: false,
    },
    {
      title: "PACOTE - FESTA DINO",
      features: [
        "500 salgadinhos fritos na hora",
        "1 Dino animador",
        "2 cascatas deliciosas (doce ou salgado)",
      ],
      color: "yellow" as const,
      isPopular: true,
    },
    {
      title: "PACOTE - DINO PREMIUM",
      features: [
        "Diversão garantida completa!",
        "2.000 salgadinhos fritos na hora",
        "2 Dino animadores",
      ],
      color: "orange" as const,
      isPopular: false,
    },
    {
      title: "ESCOLHA O DINO PARA ANIMAR A SUA FESTA!",
      features: [
        "Equipe treinada",
        "Pacotes personalizados",
        "Atendemos em Barueri e região!",
      ],
      color: "blue" as const,
      isPopular: false,
    },
  ];

  return (
    <section id="pacotes" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Escolha o pacote perfeito para sua festa!">
          🎉 Nossos Pacotes de Festa
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              features={pkg.features}
              color={pkg.color}
              isPopular={pkg.isPopular}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-200"
        >
          <h3 className="text-2xl font-display font-bold text-primary-500 mb-4 text-center">
            🍽️ Cardápio Avulso
          </h3>
          <p className="text-gray-700 text-center text-lg">
            Também oferecemos venda de centos de salgados e churros via Delivery.
            Entre em contato pelo WhatsApp para fazer seu pedido personalizado!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

