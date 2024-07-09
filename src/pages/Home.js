import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      title: "Plataforma de Cursos",
      description: "Uma plataforma para venda de cursos online com diversas funcionalidades.",
      link: "/projects"
    },
    {
      title: "Sistema de Autoatendimento para Lavanderia",
      description: "Sistema de autoatendimento via WhatsApp para uma lavanderia.",
      link: "/projects"
    },
    {
      title: "Aplicativo Web de Tarefas",
      description: "Um aplicativo para gerenciamento de tarefas pessoais.",
      link: "/projects"
    }
  ];

  return (
    <div>
      <main className="pt-20">
        {/* Seção Clara */}
        <section className="bg-white text-gray-900 w-full">
          <div className="container mx-auto p-4 mb-16">
            <h2 className="text-4xl font-bold mb-4 p-8">Projetos Recentes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Seção Escura */}
        <section className="bg-gray-900 text-gray-100">
          <div className="container mx-auto p-4 mb-16 text-center">
            <motion.h1
              className="text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bem-vindo ao meu Portfólio!
            </motion.h1>
            <motion.p
              className="text-xl mb-8 p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Aqui você encontrará os projetos que desenvolvi e as tecnologias que utilizo.
            </motion.p>
          </div>

          <div className="container mx-auto p-4 mb-16">
            <h2 className="text-4xl font-bold mb-4 p-8">Sobre Mim</h2>
            <p className="text-lg mb-4 p-8">
              Sou Jorge, um desenvolvedor de software apaixonado por criar soluções inovadoras. Tenho experiência em várias tecnologias, incluindo Node.js, React, e muito mais.
            </p>
            <Link to="/about" className="text-blue-500 hover:underline text-lg p-8">
              Leia mais sobre mim
            </Link>
          </div>

          <div className="container mx-auto p-4 mb-16">
  <h2 className="text-4xl font-bold mb-4 p-8">Habilidades</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:bg-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold hover:text-white">JavaScript</h3>
      <p className="hover:text-white">Experiência em desenvolvimento front-end e back-end com JavaScript.</p>
    </motion.div>
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:bg-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold hover:text-white">React</h3>
      <p className="hover:text-white">Desenvolvimento de interfaces de usuário dinâmicas e interativas com React.</p>
    </motion.div>
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:bg-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold hover:text-white">Node.js</h3>
      <p className="hover:text-white">Desenvolvimento de servidores e APIs escaláveis com Node.js.</p>
    </motion.div>
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:bg-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold hover:text-white">Express</h3>
      <p className="hover:text-white">Criação de APIs RESTful e gerenciamento de rotas com Express.</p>
    </motion.div>
    <motion.div
      className="bg-gray-800 text-whites p-6 rounded-lg shadow-md hover:bg-gray-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold hover:text-white">MongoDB</h3>
      <p className="hover:text-white">Gerenciamento de dados não relacionais com MongoDB.</p>
    </motion.div>
  </div>
</div>
        </section>

        {/* Nova Seção de Contato */}
        <section className="bg-white text-gray-900 w-full">
  <div className="container mx-auto p-4 mb-16">
    <h2 className="text-4xl font-bold mb-4">Contato</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
      </div>
      <div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>
      </main>
    </div>
  );
};

export default Home;
