import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Book, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({
  onNavigate,
  currentPage,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <Book className="w-8 h-8 text-[#2C5282]" />
          <div className="font-serif">
            <h1 className="text-xl text-[#2C5282] leading-tight">
              Fundamentos da Fé
            </h1>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onNavigate("home")}
            className={`hover:text-[#2C5282] transition-colors ${
              currentPage === "home"
                ? "text-[#2C5282]"
                : "text-gray-700"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => onNavigate("modules")}
            className={`hover:text-[#2C5282] transition-colors ${
              currentPage === "modules"
                ? "text-[#2C5282]"
                : "text-gray-700"
            }`}
          >
            Módulos de Estudo
          </button>
          <button
            onClick={() => onNavigate("recent")}
            className={`hover:text-[#2C5282] transition-colors ${
              currentPage === "recent"
                ? "text-[#2C5282]"
                : "text-gray-700"
            }`}
          >
            Galeria
          </button>
          <button
            onClick={() => onNavigate("about")}
            className={`hover:text-[#2C5282] transition-colors ${
              currentPage === "about"
                ? "text-[#2C5282]"
                : "text-gray-700"
            }`}
          >
            Sobre
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavigation("home")}
              className={`text-left py-2 hover:text-[#2C5282] transition-colors ${
                currentPage === "home"
                  ? "text-[#2C5282]"
                  : "text-gray-700"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation("modules")}
              className={`text-left py-2 hover:text-[#2C5282] transition-colors ${
                currentPage === "modules"
                  ? "text-[#2C5282]"
                  : "text-gray-700"
              }`}
            >
              Módulos de Estudo
            </button>
            <button
              onClick={() => handleNavigation("recent")}
              className={`text-left py-2 hover:text-[#2C5282] transition-colors ${
                currentPage === "recent"
                  ? "text-[#2C5282]"
                  : "text-gray-700"
              }`}
            >
              Estudos Recentes
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className={`text-left py-2 hover:text-[#2C5282] transition-colors ${
                currentPage === "about"
                  ? "text-[#2C5282]"
                  : "text-gray-700"
              }`}
            >
              Sobre
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}