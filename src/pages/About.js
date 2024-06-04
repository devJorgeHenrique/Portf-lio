import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-100">Sobre Mim</h1>
          <p className="text-lg text-gray-300 mb-8">
            Sou Jorge, um desenvolvedor de software apaixonado por criar soluções inovadoras. Com experiência em várias tecnologias, como Node.js, React, e muito mais, estou sempre em busca de novos desafios para aprimorar minhas habilidades.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Minha Jornada</h2>
          <p className="text-lg text-gray-300 mb-4">
            Comecei minha carreira como desenvolvedor júnior, aprendendo e crescendo com cada projeto. Ao longo dos anos, desenvolvi uma forte compreensão das melhores práticas de desenvolvimento de software e adquiri uma ampla gama de habilidades técnicas.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Trabalhei em diversos projetos, desde pequenas aplicações web até grandes sistemas corporativos. Minha paixão por tecnologia e minha dedicação ao aprendizado contínuo me permitiram evoluir constantemente como profissional.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Valores e Filosofia</h2>
          <p className="text-lg text-gray-300 mb-4">
            Acredito que a tecnologia deve ser usada para melhorar a vida das pessoas. Meu objetivo é criar soluções que não apenas atendam às necessidades dos usuários, mas que também proporcionem uma experiência agradável e intuitiva.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Estou comprometido com a qualidade e a excelência em todos os aspectos do meu trabalho. Acredito na importância da colaboração e da comunicação aberta para o sucesso de qualquer projeto.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Hobbies e Interesses</h2>
          <p className="text-lg text-gray-300 mb-4">
            Quando não estou codificando, gosto de explorar novas tecnologias, ler sobre tendências da indústria e participar de eventos de tecnologia. Também gosto de atividades ao ar livre, como caminhadas e ciclismo.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Acredito que um equilíbrio saudável entre trabalho e vida pessoal é essencial para a criatividade e a inovação.
          </p>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
