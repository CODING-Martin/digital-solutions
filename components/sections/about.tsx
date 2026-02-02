export function About() {
  const features = [
    {
      icon: "👥",
      title: "Atención Personalizada",
      description: "Contacto directo con el equipo de desarrollo"
    },
    {
      icon: "💬",
      title: "Comunicación Clara",
      description: "Sin tecnicismos, lenguaje simple y directo"
    },
    {
      icon: "💰",
      title: "Presupuestos Accesibles",
      description: "Planes ajustados a tu presupuesto"
    },
    {
      icon: "📈",
      title: "Proyectos Escalables",
      description: "Soluciones que crecen con tu negocio"
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Quiénes <span className="text-gradient">somos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos tres profesionales independientes que trabajamos de forma cercana con cada cliente
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <span className="text-4xl mr-4">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-8">
          <p className="text-lg text-center italic">
            “Nuestro compromiso es que la tecnología sea una herramienta real para tu negocio, no un gasto más.”
          </p>
        </div>
      </div>
    </section>
  );
}
