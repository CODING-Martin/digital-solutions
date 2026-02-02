"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-primary">Web</span>
              <span className="text-foreground">Core</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("portafolio")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Portafolio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Equipo
              </button>
              <Button onClick={() => scrollToSection("contacto")}>
                Contacto
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent hover:text-primary rounded-md"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent hover:text-primary rounded-md"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent hover:text-primary rounded-md"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent hover:text-primary rounded-md"
            >
              Equipo
            </button>
            <div className="px-3 py-2">
              <Button
                className="w-full"
                onClick={() => scrollToSection("contacto")}
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
