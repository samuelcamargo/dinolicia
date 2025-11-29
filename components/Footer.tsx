import Link from "next/link";
import { Phone, Instagram, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-500 mb-4">
              🦖 DINOLÍCIA
            </h3>
            <p className="text-gray-300 mb-4">
              O delivery jurássico e buffet infantil mais divertido de Barueri e região!
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={18} />
              <span className="text-sm">Atendemos em Barueri e região</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511986248864?text=Olá! Gostaria de fazer um pedido na Dinolícia."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Phone size={18} />
                <span>(11) 98624-8864</span>
              </a>
              <a
                href="https://www.instagram.com/dino_licia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@dino_licia</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Início
              </Link>
              <Link
                href="/#pacotes"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Pacotes
              </Link>
              <Link
                href="/galeria"
                className="block text-gray-300 hover:text-primary-400 transition-colors"
              >
                Galeria
              </Link>
              <a
                href="https://www.ifood.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <span>Peça no iFood</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dinolícia Buffet Infantil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

