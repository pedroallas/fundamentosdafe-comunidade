import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Monitor,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Igreja Info */}
          <div>
            <h3 className="font-serif mb-4">Fundamentos da Fé</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Rua da Igreja, 123 - Centro</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@fundamentosdafe.org.br</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-serif mb-4">Links Rápidos</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <a href="#" className="hover:text-white transition-colors">
                  Início
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-white transition-colors">
                  Módulos de Estudo
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-white transition-colors">
                  Declaração de Fé
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre o Projeto
                </a>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-serif mb-4">Nos Acompanhe</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Desenvolvedor Section */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center sm:text-left">
              &copy; 2025 Fundamentos da Fé. Todos os direitos reservados.
            </p>
            <a
              href="https://www.pedroallas.online/"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">Desenvolvido por</span>
              <div className="flex items-center gap-2">
                <img
                  src="/desenvolvedor.png"
                  alt="Pedro Allas dos Santos Borges"
                  className="w-8 h-8 rounded-full object-cover border border-gray-500 group-hover:border-white transition-colors"
                />
                <div className="flex flex-col text-right">
                  <span className="text-sm font-medium">Pedro Allas</span>
                  <span className="text-xs text-gray-400">
                    Software Engineer
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
