"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="text-primary-500">Dinolícia:</span> O Delivery{" "}
              <span className="text-secondary-500">Jurássico</span> e Buffet
              Infantil mais{" "}
              <span className="text-accent-500">divertido</span> de Barueri e
              região!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Salgadinhos fritos na hora, churros deliciosos, cascatas
              incríveis e animadores fantasiados de dinossauros para tornar sua
              festa inesquecível! 🦖
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="https://wa.me/5511986248864?text=Olá! Gostaria de fazer um pedido na Dinolícia."
                size="lg"
                variant="primary"
                external
                className="group"
              >
                Pedir Agora
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                href="/#pacotes"
                size="lg"
                variant="outline"
                className="group"
              >
                Ver Pacotes
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Dinosaur Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-9xl mb-4">🦖</div>
                <div className="text-2xl font-display font-bold text-primary-500 mb-2">
                  DINOLÍCIA
                </div>
                <div className="text-gray-600">Buffet Infantil</div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-4xl"
            >
              🍟
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 text-4xl"
            >
              🍩
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

