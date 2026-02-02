import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp } from '../config/animations';

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar una página web?",
    answer: "Dependiendo de la complejidad, una landing page puede estar lista en 1-2 semanas, mientras que un sitio corporativo completo o e-commerce puede tomar de 4 a 8 semanas."
  },
  {
    question: "¿Incluyen el servicio de hosting y dominio?",
    answer: "Sí, nuestros planes Profesional y Empresarial incluyen hosting premium por el primer año. También te asesoramos en la compra de tu dominio."
  },
  {
    question: "¿Es el CRM compatible con mis herramientas actuales?",
    answer: "Nuestro CRM es altamente flexible y puede integrarse vía API con herramientas populares como Mailchimp, Google Workspace, Zapier y más."
  },
  {
    question: "¿Ofrecen soporte después de terminar el proyecto?",
    answer: "Absolutamente. Ofrecemos periodos de garantía y planes de mantenimiento mensual para asegurar que tu sitio o sistema siga funcionando perfectamente."
  },
  {
    question: "¿Los sitios web están optimizados para móviles?",
    answer: "Sí, todos nuestros desarrollos siguen la filosofía 'Mobile First', asegurando que se vean y funcionen perfectamente en cualquier dispositivo."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="section-padding bg-black">
      <div className="container-custom max-w-3xl">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-400">Resolvemos tus dudas antes de empezar</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="text-blue-500" />
                ) : (
                  <Plus className="text-gray-500" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;