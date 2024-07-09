import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const projectsSection = document.querySelector('.bg-white');
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsDarkTheme(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      if (projectsSection) {
        observer.observe(projectsSection);
      }
      return () => {
        if (projectsSection) {
          observer.unobserve(projectsSection);
        }
      };
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 flex justify-center z-50">
      <nav className={`flex justify-between items-center w-11/12 md:w-4/5 lg:w-3/4 p-4 rounded-full backdrop-blur-lg bg-opacity-50 shadow-md transition-colors duration-500 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <Link to="/" className="text-xl font-bold">
          Jorge's Portfolio
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-600">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-600">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100vh' }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex flex-col justify-center items-center text-center z-50`}
        >
          <div className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes size={30} className={`${isDarkTheme ? 'text-white' : 'text-gray-900'}`} />
          </div>
          <ul className="space-y-8 text-2xl">
            <li>
              <Link to="/" className="hover:text-gray-600" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-600" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-600" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-600" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
