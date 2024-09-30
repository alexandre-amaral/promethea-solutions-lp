"use client";

import { motion } from "framer-motion";
import { FaRobot, FaSyncAlt, FaChartLine, FaCog } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-16"
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        {/* Opcional: Adicione um SVG decorativo aqui */}
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Seção Superior */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="mb-6 text-5xl font-bold text-[#192B38]">
            Conheça a{" "}
            <span className="gradient-text">Promethea Solutions</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            Na Promethea Solutions, somos especialistas em automação empresarial,
            integração de sistemas e inteligência de negócios. Nossa missão é
            transformar empresas através de soluções tecnológicas inovadoras que
            impulsionam a eficiência operacional, promovem a integração de processos e
            geram insights valiosos para decisões estratégicas. Com uma equipe
            experiente e dedicada, estamos comprometidos em fornecer soluções
            personalizadas que atendam às necessidades específicas de cada cliente.
          </p>
        </motion.div>

        {/* Seção de Proposta de Valor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-16"
        >
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start"
            >
              <FaRobot className="mr-4 mt-1 h-8 w-8 text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-[#192B38]">
                  Automação Inteligente
                </h4>
                <p className="mt-2 text-gray-700">
                  Implementamos soluções de automação que utilizam Inteligência
                  Artificial e RPA para otimizar processos e reduzir custos
                  operacionais.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-start"
            >
              <FaSyncAlt className="mr-4 mt-1 h-8 w-8 text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-[#192B38]">
                  Integração de Sistemas
                </h4>
                <p className="mt-2 text-gray-700">
                  Conectamos diferentes sistemas e plataformas para criar um fluxo de
                  trabalho harmonioso, melhorando a comunicação e a eficiência entre
                  departamentos.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-start"
            >
              <FaChartLine className="mr-4 mt-1 h-8 w-8 text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-[#192B38]">
                  Inteligência de Negócios
                </h4>
                <p className="mt-2 text-gray-700">
                  Analisamos dados e fornecemos insights estratégicos para apoiar a
                  tomada de decisões e impulsionar o crescimento do seu negócio.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-start"
            >
              <FaCog className="mr-4 mt-1 h-8 w-8 text-blue-500" />
              <div>
                <h4 className="text-xl font-semibold text-[#192B38]">
                  Soluções Personalizadas
                </h4>
                <p className="mt-2 text-gray-700">
                  Desenvolvemos soluções sob medida que atendem às necessidades
                  específicas da sua empresa, garantindo a máxima eficiência e
                  desempenho.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}