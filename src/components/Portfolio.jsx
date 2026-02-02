import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeInUp } from '../config/animations';

const projects = [
  {
    id: 1,
    title: "E-Commerce de Moda",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d",
    description: "Plataforma de ventas con experiencia de usuario premium.",
    results: "+150% Ventas"
  },
  {
    id: 2,
    title: "Dashboard Financiero",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2",
    description: "Sistema de gestión interna para análisis de datos.",
    results: "-40% Tiempo Admin"
  },
  {
    id: 3,
    title: "Inmobiliaria Moderna",
    category: "Páginas Web",
    image: "https://images.unsplash.com/photo-1684400661290-50c3f2600cf0",
    description: "Sitio web corporativo con listados dinámicos.",
    results: "+200% Leads"
  },
  {
    id: 4,
    title: "App de Delivery",
    category: "Páginas Web",
    image: "https://images.unsplash.com/photo-1679978880855-fb35585ce343",
    description: "Landing page de alta conversión para startup.",
    results: "10k Descargas"
  },
  {
    id: 5,
    title: "CRM Automotriz",
    category: "CRM",
    image: "https://images.unsplash.com/photo-1699304296669-ccf495d8c952",
    description: "Gestión de inventario y seguimiento de clientes.",
    results: "+85% Retención"
  },
  {
    id: 6,
    title: "Marketplace Artesanal",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1507146815454-9faa99d579aa",
    description: "Tienda online multi-vendedor escalable.",
    results: "3M+ Visitas"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const filters = ["Todos", "Páginas Web", "CRM", "E-commerce"];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-black border-t border-white/5">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Casos de Éxito</h2>
          <p className="text-gray-400">Proyectos que hablan por sí mismos</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === f 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center border-t border-white/20 pt-4">
                    <span className="text-white font-bold">{project.results}</span>
                    <button className="p-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;