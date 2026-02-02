import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Edit2, Check } from 'lucide-react';
import { useToast } from '../ui/use-toast';

const Team = () => {
  const { toast } = useToast();
  
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Nombre del Miembro 1',
      title: 'Especialista en Desarrollo Web',
      bio: 'Apasionado por crear experiencias web excepcionales que combinan diseño innovador con funcionalidad impecable. Especializado en React y tecnologías modernas.',
      image: 'https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa',
      social: {
        linkedin: '#',
        github: '#',
        email: 'miembro1@digitalsolutions.com'
      }
    },
    {
      id: 2,
      name: 'Nombre del Miembro 2',
      title: 'Especialista en CRM',
      bio: 'Experto en diseñar soluciones CRM personalizadas que transforman la forma en que las empresas gestionan sus relaciones con clientes. Enfoque en optimización y automatización.',
      image: 'https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa',
      social: {
        linkedin: '#',
        github: '#',
        email: 'miembro2@digitalsolutions.com'
      }
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedMember, setEditedMember] = useState(null);

  const handleEdit = (member) => {
    setEditingId(member.id);
    setEditedMember({ ...member });
  };

  const handleSave = () => {
    setTeamMembers(teamMembers.map(member => 
      member.id === editingId ? editedMember : member
    ));
    setEditingId(null);
    setEditedMember(null);
    toast({
      title: "Cambios guardados",
      description: "La información del miembro ha sido actualizada.",
    });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 Esta característica no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-gradient">Equipo</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"
          />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales dedicados a llevar tu negocio al siguiente nivel digital
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {teamMembers.map((member) => {
            const isEditing = editingId === member.id;
            const currentMember = isEditing ? editedMember : member;

            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Edit Button */}
                  <div className="flex justify-end mb-2">
                    {isEditing ? (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSave}
                        className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                      >
                        <Check size={16} />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleEdit(member)}
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Edit2 size={16} />
                      </motion.button>
                    )}
                  </div>

                  {/* Name */}
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentMember.name}
                      onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
                      className="w-full text-2xl font-bold mb-2 px-2 py-1 border-2 border-blue-300 rounded text-gray-900"
                    />
                  ) : (
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{currentMember.name}</h3>
                  )}

                  {/* Title */}
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentMember.title}
                      onChange={(e) => setEditedMember({ ...editedMember, title: e.target.value })}
                      className="w-full text-blue-600 font-semibold mb-4 px-2 py-1 border-2 border-blue-300 rounded"
                    />
                  ) : (
                    <p className="text-blue-600 font-semibold mb-4">{currentMember.title}</p>
                  )}

                  {/* Bio */}
                  {isEditing ? (
                    <textarea
                      value={currentMember.bio}
                      onChange={(e) => setEditedMember({ ...editedMember, bio: e.target.value })}
                      rows={3}
                      className="w-full text-gray-600 mb-6 px-2 py-1 border-2 border-blue-300 rounded resize-none"
                    />
                  ) : (
                    <p className="text-gray-600 mb-6 leading-relaxed">{currentMember.bio}</p>
                  )}

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleSocialClick('linkedin')}
                      className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleSocialClick('github')}
                      className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleSocialClick('email')}
                      className="p-3 bg-teal-100 text-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors"
                    >
                      <Mail size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;