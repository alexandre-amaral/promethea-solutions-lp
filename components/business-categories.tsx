import Image from "next/image";
import Logo01 from "@/public/images/logo-01.svg";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo06 from "@/public/images/logo-06.svg";
import Logo07 from "@/public/images/logo-07.svg";
import Logo08 from "@/public/images/logo-08.svg";
import Logo09 from "@/public/images/logo-09.svg";
import Logo10 from "@/public/images/logo-10.svg";
import Logo11 from "@/public/images/logo-11.svg";
import Logo12 from "@/public/images/logo-12.svg";
import Logo13 from "@/public/images/logo-13.svg";
import Logo14 from "@/public/images/logo-14.svg";
import Logo15 from "@/public/images/logo.png";
import Logo16 from "@/public/images/logo-16.svg";
import Logo17 from "@/public/images/logo-17.svg";

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Título de Integração Centralizado */}
          <h2
            className="mb-6 border-b text-3xl font-bold text-[#192B38] md:text-4xl text-center"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            Integração, autoação e inteligência
          </h2>
          {/* Subtítulo */}
          <p className="mb-8 text-lg text-gray-700 text-center">
          Conecte sistemas, otimize processos e impulsione a eficiência com soluções de integração personalizadas para sua empresa.
          </p>
          {/* Conteúdo Principal */}
          <div className="relative flex h-[400px] sm:h-[324px] items-center justify-center">
            {/* Pequenos pontos azuis */}
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                {/* ... conteúdo do SVG ... */}
              </svg>
            </div>
            {/* Brilho azul */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                {/* ... conteúdo do SVG ... */}
              </svg>
            </div>
            {/* Linhas horizontais */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[120px] sm:inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[50px] sm:-translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[50px] sm:translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500"></div>
            {/* Linhas diagonais */}
            <div className="absolute inset-x-[180px] sm:inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[180px] sm:inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Linhas verticais */}
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[160px] sm:-translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[160px] sm:translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Logos */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                  <Image
                    className="relative"
                    src={Logo15}
                    width={100}
                    height={64}
                    alt="Logo Central"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                {/* Logo 02 */}
                <div className="absolute -translate-x-20 sm:-translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={Logo11}
                        width={30}
                        height={30}
                        alt="Integração 1"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 03 */}
                <div className="absolute translate-x-20 sm:translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={Logo17}
                        width={30}
                        height={30}
                        alt="Integração 2"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 04 */}
                <div className="absolute -translate-x-32 sm:-translate-x-[216px] -translate-y-12 sm:-translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={Logo14}
                        width={24}
                        height={22}
                        alt="Integração 3"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 05 */}
                <div className="absolute -translate-y-12 sm:-translate-y-[82px] translate-x-32 sm:translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={Logo16}
                        width={30}
                        height={30}
                        alt="Integração 4"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 06 */}
                <div className="absolute translate-x-32 sm:translate-x-[216px] translate-y-12 sm:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={Logo12}
                        width={40}
                        height={40}
                        alt="Integração 5"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 07 */}
                <div className="absolute -translate-x-32 sm:-translate-x-[216px] translate-y-12 sm:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03]">
                      <Image
                        className="relative"
                        src={Logo03}
                        width={25}
                        height={25}
                        alt="Integração 6"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 08 */}
                <div className="absolute -translate-x-44 sm:-translate-x-[292px] opacity-70">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo10}
                        width={30}
                        height={30}
                        alt="Integração 7"
                      />
                    </div>
                  </div>
                </div>
                {/* Logo 09 */}
                <div className="absolute translate-x-44 sm:translate-x-[292px] opacity-70">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo13}
                        width={30}
                        height={30}
                        alt="Integração 8"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}