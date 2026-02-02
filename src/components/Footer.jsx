import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Heart } from 'lucide-react';

// X (Twitter) icon component
const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// TikTok icon component
const TikTok = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-white mb-6">
              DIGITAL<span className="text-blue-500">SOLUTIONS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando negocios a través de innovación digital, diseño web de alto impacto y sistemas CRM inteligentes.
            </p>
            <div className="flex gap-4">
              {[Facebook, XIcon, Instagram, TikTok].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#3B82F6' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              {['Servicios', 'Portafolio', 'Precios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Suscríbete para recibir las últimas novedades tecnológicas.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-white text-black font-bold py-3 rounded-2xl hover:bg-gray-200 transition-colors text-sm">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DigitalSolutions. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            Hecho con <Heart size={14} className="text-red-500 fill-current" /> en Argentina
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;