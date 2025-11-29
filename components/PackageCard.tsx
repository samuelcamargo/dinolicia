"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

interface PackageCardProps {
  title: string;
  features: string[];
  color: "green" | "yellow" | "orange" | "blue";
  isPopular?: boolean;
  index: number;
}

const colorClasses = {
  green: {
    bg: "bg-secondary-100",
    header: "bg-secondary-500",
    text: "text-secondary-700",
  },
  yellow: {
    bg: "bg-accent-100",
    header: "bg-accent-500",
    text: "text-accent-700",
  },
  orange: {
    bg: "bg-primary-100",
    header: "bg-primary-500",
    text: "text-primary-700",
  },
  blue: {
    bg: "bg-blue-100",
    header: "bg-blue-500",
    text: "text-blue-700",
  },
};

export default function PackageCard({
  title,
  features,
  color,
  isPopular = false,
  index,
}: PackageCardProps) {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-2xl ${colors.bg} p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star size={16} fill="currentColor" />
            <span>O MAIS PEDIDO!</span>
          </div>
        </div>
      )}

      <div className={`${colors.header} text-white px-6 py-4 rounded-t-xl -mx-6 -mt-6 mb-6`}>
        <h3 className="text-xl font-display font-bold">{title}</h3>
      </div>

      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <CheckCircle2
              className={`${colors.text} flex-shrink-0 mt-0.5`}
              size={20}
            />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

