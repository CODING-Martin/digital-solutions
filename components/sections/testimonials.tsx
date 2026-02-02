export function Testimonials() {
  const testimonials = [
    {
      text: "WebCore nos ayudó a profesionalizar nuestra imagen digital. Excelente trabajo.",
      author: "Juan Pérez",
      role: "Dueño de Comercio Local",
      rating: 5
    },
    {
      text: "Ahora tenemos todo organizado en un solo sistema. El CRM superó nuestras expectativas.",
      author: "María González",
      role: "Gerente de Ventas",
      rating: 5
    },
    {
      text: "Excelente trato y entrega rápida. Muy recomendable para cualquier tipo de proyecto web.",
      author: "Carlos Rodríguez",
      role: "Emprendedor",
      rating: 5
    },
  ];

  return (
    <section id="testimonios" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-muted-foreground">
            Testimonios reales de clientes satisfechos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
