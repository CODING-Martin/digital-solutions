"use client";

import { useState } from "react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("todos");

  const projects = [
    {
      title: "E-Commerce Moderno",
      description: "Plataforma de comercio electrónico con carrito de compras y pasarela de pagos",
      category: "web",
      tags: ["React", "Node.js", "Sitio Web"],
      image: "💻"
    },
    {
      title: "Sistema CRM Empresarial",
      description: "CRM personalizado para gestión de clientes con automatización de ventas",
      category: "crm",
      tags: ["CRM", "Database", "Analytics"],
      image: "📊"
    },
    {
      title: "Web Corporativa",
      description: "Sitio institucional con catálogo digital y formulario de contacto",
      category: "web",
      tags: ["Next.js", "SEO", "Responsive"],
      image: "🌐"
    },
    {
      title: "Sistema de Pedidos QR",
      description: "Sistema de registro de pedidos con códigos QR para restaurantes",
      category: "crm",
      tags: ["QR", "Mobile", "Real-time"],
      image: "📱"
    },
  ];

  const filteredProjects = activeTab === "todos" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portafolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Casos de éxito que demuestran nuestro trabajo
          </p>

          {/* Tabs */}
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("todos")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "todos" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "web" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sitios Web
            </button>
            <button
              onClick={() => setActiveTab("crm")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "crm" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              CRM
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-7xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          ➡ Próximamente más proyectos…
        </p>
      </div>
    </section>
  );
}
