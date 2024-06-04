import { motion } from 'framer-motion';
import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      className="bg-gray-800 text-white p-8 my-8 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-bold mb-4">{title}</h3>
      <p className="text-xl mb-4">{description}</p>
      <a href={link} className="text-blue-400 hover:underline text-xl">Ver Projeto</a>
    </motion.div>
  );
};

export default ProjectCard;
