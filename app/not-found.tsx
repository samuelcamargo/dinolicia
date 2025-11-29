"use client";

import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-display font-bold text-primary-500 mb-4">
          404
        </h1>
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Voltar para Home
          </Button>
          <Button href="/galeria" variant="outline" size="lg">
            Ver Galeria
          </Button>
        </div>
      </div>
    </div>
  );
}

