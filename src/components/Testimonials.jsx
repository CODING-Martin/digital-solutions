import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fadeInUp } from '../config/animations';

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "TechStart",
    content: "DigitalSolutions transformó nuestra presencia online por completo. El nuevo sitio web no solo es hermoso, sino que nuestras conversiones han aumentado un 150%.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Directora de Marketing",
    company: "ModaVibe",
    content: "El CRM que implementaron ha simplificado nuestro proceso de ventas de una manera increíble. Ahora tenemos control total sobre nuestros leads.",
    rating: 5
  },
  {
    id: 3,
    name: "Luis García",
    role: "Fundador",
    company: "InmoLuxury",
    content: "Profesionalismo puro. Entendieron exactamente lo que necesitábamos y lo entregaron antes del plazo. El soporte post-venta es excepcional.",
    rating: 5
  },
  {
    id: 4,
    name: "Elena Torres",
    role: "Gerente",
    company: "GourmetExpress",
    content: "La mejor inversión que hemos hecho este año. La integración del e-commerce con nuestro sistema de inventario funciona a la perfección.",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-black border-t border-white/5">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-blue-900/20">
            <Quote size={120} />
          </div>

          <div className="relative overflow-hidden min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center px-8"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-white mb-8 italic leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-blue-400">{testimonials[current].name}</h4>
                  <p className="text-gray-500">{testimonials[current].role} en {testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;