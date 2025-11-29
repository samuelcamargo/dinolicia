"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/5511986248864?text=Olá! Gostaria de fazer um pedido na Dinolícia."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle size={28} />
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          className="whitespace-nowrap font-semibold pr-2"
        >
          Faça seu pedido!
        </motion.span>
      )}
    </motion.a>
  );
}

