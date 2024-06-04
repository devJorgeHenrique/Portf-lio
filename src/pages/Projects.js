import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: 'Plataforma de Cursos',
    description: 'Uma plataforma para venda de cursos online com diversas funcionalidades.',
    link: 'https://github.com/seu-usuario/plataforma-de-cursos'
  },
  {
    title: 'Sistema de Autoatendimento para Lavanderia',
    description: 'Sistema de autoatendimento via WhatsApp para uma lavanderia.',
    link: 'https://github.com/seu-usuario/sistema-de-autoatendimento'
  },
  {
    title: 'Aplicativo Web de Tarefas',
    description: 'Um aplicativo para gerenciamento de tarefas pessoais.',
    link: 'https://github.com/seu-usuario/app-de-tarefas'
  }
];

const Projects = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        <section className="mb-16 text-center">
          <motion.h1
            className="text-6xl font-bold mb-8 text-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projetos
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aqui estão alguns dos projetos nos quais trabalhei recentemente.
          </motion.p>
        </section>

        <section className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline text-xl" target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Projects;
