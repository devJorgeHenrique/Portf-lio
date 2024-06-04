import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        <section className="mb-16 text-center">
          <motion.h1
            className="text-6xl font-bold mb-4 text-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Bem-vindo ao meu Portfólio!
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aqui você encontrará os projetos que desenvolvi e as tecnologias que utilizo.
          </motion.p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Sobre Mim</h2>
          <p className="text-lg mb-4 text-gray-300">
            Sou Jorge, um desenvolvedor de software apaixonado por criar soluções inovadoras. Tenho experiência em várias tecnologias, incluindo Node.js, React, e muito mais.
          </p>
          <Link to="/about" className="text-blue-500 hover:underline text-lg">
            Leia mais sobre mim
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Habilidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">JavaScript</h3>
              <p>Experiência em desenvolvimento front-end e back-end com JavaScript.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">React</h3>
              <p>Desenvolvimento de interfaces de usuário dinâmicas e interativas com React.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Node.js</h3>
              <p>Desenvolvimento de servidores e APIs escaláveis com Node.js.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Express</h3>
              <p>Criação de APIs RESTful e gerenciamento de rotas com Express.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">MongoDB</h3>
              <p>Gerenciamento de dados não relacionais com MongoDB.</p>
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Projetos Recentes</h2>
          <div className="space-y-4">
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Plataforma de Cursos</h3>
              <p>Uma plataforma para venda de cursos online com diversas funcionalidades.</p>
              <Link to="/projects" className="text-blue-500 hover:underline">
                Veja mais detalhes
              </Link>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Sistema de Autoatendimento para Lavanderia</h3>
              <p>Sistema de autoatendimento via WhatsApp para uma lavanderia.</p>
              <Link to="/projects" className="text-blue-500 hover:underline">
                Veja mais detalhes
              </Link>
            </motion.div>
            <motion.div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Aplicativo Web de Tarefas</h3>
              <p>Um aplicativo para gerenciamento de tarefas pessoais.</p>
              <Link to="/projects" className="text-blue-500 hover:underline">
                Veja mais detalhes
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
