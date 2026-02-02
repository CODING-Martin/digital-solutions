import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="text-gradient">empezar?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conversemos sobre tu proyecto y llevemos tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Info de Contacto */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">[TU NÚMERO]</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">[TU EMAIL]</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Mendoza, Argentina</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Servicio remoto a todo el país
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Querés llevar tu negocio al mundo digital?
            </h3>
            <p className="text-muted-foreground mb-6">
              Escribinos y te proponemos la mejor solución para tu proyecto
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-3"
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
                <span>Presupuesto en 24 horas</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-3"
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
                <span>Plan a medida de tu negocio</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-primary mr-3"
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
                <span>Sin compromiso</span>
              </div>
            </div>
            <Button size="lg" className="w-full">
              Contactanos hoy mismo
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2026 Web Core. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
