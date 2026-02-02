import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../config/animations';
import ElectricBorder from './ElectricBorder';

const Pricing = () => {
  const handleSelectPlan = (planName) => {
    alert(`Plan ${planName} seleccionado. Te redirigiremos al formulario de contacto.`);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Básico",
      price: "$499",
      period: "/proyecto",
      features: [
        "Sitio Web One-Page",
        "Diseño Responsive",
        "SEO Básico",
        "Formulario de Contacto",
        "Hosting incluido (1 año)"
      ],
      highlight: false
    },
    {
      name: "Profesional",
      price: "$999",
      period: "/proyecto",
      features: [
        "Sitio Web Multi-página",
        "CMS Autogestionable",
        "SEO Avanzado",
        "Integración CRM Básico",
        "Blog / Noticias",
        "Soporte Prioritario",
        "Hosting Premium (1 año)"
      ],
      highlight: true
    },
    {
      name: "Empresarial",
      price: "A medida",
      period: "",
      features: [
        "Desarrollo 100% a medida",
        "E-commerce Avanzado",
        "CRM Personalizado",
        "Automatizaciones Complejas",
        "Integración API",
        "Soporte 24/7",
        "Infraestructura Cloud"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Planes Transparentes</h2>
          <p className="text-gray-400">Inversión estratégica para el crecimiento de tu empresa</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => {
            const cardContent = (
              <>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider z-20">
                    Recomendado
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className={`mt-0.5 ${plan.highlight ? 'text-blue-400' : 'text-gray-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-xl font-bold transition-colors ${
                    plan.highlight 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white animate-pulse-glow' 
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  Elegir Plan
                </motion.button>
              </>
            );

            if (plan.highlight) {
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="relative p-4"
                >
                  <ElectricBorder
                    color="#8B5CF6"
                    speed={1.2}
                    chaos={0.15}
                    borderRadius={24}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  >
                    <div className="relative rounded-3xl p-8 bg-white/10 flex flex-col">
                      {cardContent}
                    </div>
                  </ElectricBorder>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                className="relative rounded-3xl p-8 border bg-white/5 border-white/10 flex flex-col"
              >
                {cardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;