import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Zap, TrendingUp, LifeBuoy } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../config/animations';
import GlareHover from './GlareHover';

const benefits = [
  {
    icon: Monitor,
    title: "Presencia Digital Profesional",
    description: "Diseños web impactantes que reflejan la calidad de tu marca y capturan la atención de tus clientes."
  },
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description: "Sistemas CRM que ahorran tiempo automatizando tareas repetitivas y organizando tu flujo de trabajo."
  },
  {
    icon: TrendingUp,
    title: "Aumento de Conversiones",
    description: "Estrategias digitales enfocadas en convertir visitantes en clientes leales y recurrentes."
  },
  {
    icon: LifeBuoy,
    title: "Soporte Especializado",
    description: "Equipo técnico disponible para asegurar que tus sistemas funcionen perfectamente 24/7."
  }
];

const ValueProposition = () => {
  return (
    <section className="bg-black py-20 border-b border-white/10">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -10 }}
            >
              <GlareHover
                glareColor="#3B82F6"
                glareOpacity={0.2}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={600}
                playOnce={false}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group h-full"
                style={{
                  width: '100%',
                  height: 'auto',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '1rem',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div 
                  className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <benefit.icon className="text-blue-400 w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </GlareHover>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;