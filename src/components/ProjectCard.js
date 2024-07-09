import { motion } from 'framer-motion';
import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      className="bg-white text-gray-900 p-8 my-8 w-full max-w-sm rounded-lg shadow-md cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold mb-4 overflow-hidden text-ellipsis">{title}</h3>
      <p className="text-md mb-4 overflow-hidden text-ellipsis">{description}</p>
      <a href={link} className="text-blue-400 hover:underline text-md">Ver Projeto</a>
    </motion.div>
  );
};

export default ProjectCard;
