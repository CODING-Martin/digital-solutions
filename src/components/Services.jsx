import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Check, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../config/animations';

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceCategories = [
    {
      title: "Páginas Web Profesionales",
      description: "Creamos experiencias web inmersivas y de alto rendimiento.",
      icon: Globe,
      features: [
        "Diseño UX/UI Personalizado",
        "Desarrollo Responsive y Móvil",
        "Optimización SEO Avanzada",
        "Integración E-commerce",
        "Velocidad de Carga Ultra-rápida"
      ],
      cta: "Pedir Cotización Web",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      title: "Soluciones CRM",
      description: "Centraliza y potencia la relación con tus clientes.",
      icon: Database,
      features: [
        "Gestión de Leads y Contactos",
        "Automatización de Ventas",
        "Reportes y Analíticas en Tiempo Real",
        "Integración con Email Marketing",
        "Pipeline de Ventas Visual"
      ],
      cta: "Pedir Cotización CRM",
      gradient: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para escalar tu negocio
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/10"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl rounded-full -mr-20 -mt-20 transition-opacity group-hover:opacity-20`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                  <service.icon className="text-white w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 text-lg">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="bg-white/10 rounded-full p-1">
                        <Check size={14} className="text-green-400" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button 
                  onClick={scrollToContact}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-white font-bold text-lg group-hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {service.cta} <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;