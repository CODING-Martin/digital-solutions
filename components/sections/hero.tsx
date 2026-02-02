"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
          <span className="text-primary font-semibold">🚀 Desarrollo Web Profesional</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">WebCore</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Creamos sitios web y sistemas que impulsan tu negocio al siguiente nivel
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Somos un equipo de desarrolladores especializados en crear soluciones digitales 
          que ayudan a emprendedores y empresas a crecer en el mundo digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg" onClick={() => scrollToSection("contacto")}>
            Comenzar Proyecto
          </Button>
          <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection("portafolio")}>
            Ver Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
