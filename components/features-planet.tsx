import Image from "next/image";
import {
  FaCogs,
  FaSyncAlt,
  FaRobot,
  FaProjectDiagram,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function FeaturesPromethea() {
  return (
    <section id="services" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Soluções que transformam a sua empresa com eficiência e automação
            </h2>
          </div>

          {/* Planet with Orbiting Icons */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center relative">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                </div>

                {/* Orbiting Icons */}
                <div className="absolute left-[50%] top-[-60px] -translate-x-1/2 animate-[orbit_10s_linear_infinite,zoomInOut_5s_ease-in-out_infinite]">
                  <FaCogs className="text-blue-400 text-4xl" />
                </div>
                <div className="absolute right-[-70px] top-[50%] -translate-y-1/2 animate-[orbit_10s_linear_infinite,zoomInOut_5s_ease-in-out_infinite]">
                  <FaSyncAlt className="text-blue-400 text-4xl" />
                </div>
                <div className="absolute left-[50%] bottom-[-60px] -translate-x-1/2 animate-[orbit_10s_linear_infinite,zoomInOut_5s_ease-in-out_infinite]">
                  <FaRobot className="text-blue-400 text-4xl" />
                </div>
                <div className="absolute left-[-70px] top-[50%] -translate-y-1/2 animate-[orbit_10s_linear_infinite,zoomInOut_5s_ease-in-out_infinite]">
                  <FaProjectDiagram className="text-blue-400 text-4xl" />
                </div>
                <div className="absolute top-[50%] right-[30px] translate-y-[-130px] animate-[orbit_10s_linear_infinite,zoomInOut_5s_ease-in-out_infinite]">
                  <FaDatabase className="text-blue-400 text-4xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Subtítulo dos Serviços */}
          <div className="mt-10 pb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-200 mb-6">
              Nossos Serviços
            </h1>
          </div>

          {/* Serviços */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:relative [&>*]:p-6 md:[&>*]:p-10 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0]">
            <article>
              <h4 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaCogs className="text-blue-500" />
                <span>Automação e Integração com RPA e IA</span>
              </h4>
              <p className="text-[15px] text-gray-400">
                Desenvolvemos soluções customizadas que se integram aos sistemas existentes para melhorar a eficiência operacional, utilizando RPA e IA.
              </p>
            </article>
            <article>
              <h4 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaProjectDiagram className="text-blue-500" />
                <span>Desenvolvimento de Sites e Sistemas Sob Medida</span>
              </h4>
              <p className="text-[15px] text-gray-400">
                Criamos plataformas digitais que suportam a operação e a estratégia dos clientes, com foco em usabilidade, performance e escalabilidade.
              </p>
            </article>
            <article>
              <h4 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaChartLine className="text-blue-500" />
                <span>Consultoria em Análise de Dados e Estratégia Digital</span>
              </h4>
              <p className="text-[15px] text-gray-400">
                Transformamos dados brutos em insights valiosos, orientando estratégias de negócio com base em análises detalhadas e práticas.
              </p>
            </article>
            <article>
              <h4 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaDatabase className="text-blue-500" />
                <span>Integração de Dados</span>
              </h4>
              <p className="text-[15px] text-gray-400">
                Conecte e integre dados de diferentes fontes, centralizando informações para melhorar a visualização e a tomada de decisões.
              </p>
            </article>
            <article>
              <h4 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaSyncAlt className="text-blue-500" />
                <span>Relatórios e Insights Detalhados</span>
              </h4>
              <p className="text-[15px] text-gray-400">
                Gere relatórios detalhados sobre a performance dos processos empresariais, auxiliando na identificação de pontos de melhoria.
              </p>
            </article>
            <article>
              <h4 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaRobot className="text-blue-500" />
                <span>Suporte à Escalabilidade</span>
              </h4>
              <p className="text-[15px] text-gray-400">
                À medida que sua empresa cresce, nossas soluções garantem que seus sistemas automatizados possam escalar sem complicações.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}