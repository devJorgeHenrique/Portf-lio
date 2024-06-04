import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="text-center text-gray-300">
      <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
      <p className="mb-4">Sinta-se à vontade para entrar em contato comigo através das seguintes plataformas:</p>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/jorge" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/jorge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <FaGithub size={32} />
        </a>
        <a href="mailto:jorge@example.com" className="text-red-500 hover:text-red-400">
          <FaEnvelope size={32} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
