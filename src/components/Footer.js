import React from 'react';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 mt-16">
      <div className="container mx-auto text-center">
        <Contact />
        <div className="mt-8">
          <p>&copy; 2024 Jorge. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
