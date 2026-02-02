export function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Desarrollo Web",
      description: "Sitios web profesionales y modernos",
      items: [
        "Landing pages optimizadas",
        "Webs institucionales",
        "Tiendas online completas",
        "Diseño responsive",
        "SEO optimizado",
      ],
    },
    {
      icon: "🧠",
      title: "CRM & Sistemas",
      description: "Soluciones a medida para tu negocio",
      items: [
        "Gestión de clientes",
        "Seguimiento de ventas",
        "Control de inventario",
        "Historial de operaciones",
        "Automatización de procesos",
      ],
    },
    {
      icon: "🛠",
      title: "Soporte & Mantenimiento",
      description: "Acompañamiento continuo",
      items: [
        "Actualizaciones constantes",
        "Copias de seguridad",
        "Mejoras funcionales",
        "Asesoramiento tecnológico",
        "Soporte técnico",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg
                      className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
