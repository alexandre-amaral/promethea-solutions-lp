import Link from "next/link";
import Logo from "./logo";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Área superior: Blocos */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          }`}
        >
          {/* Primeiro bloco */}
          <div className="sm:col-span-12 lg:col-span-6">
            <div>
              <Logo />
            </div>
            <div className="mt-2 text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Promethea Solutions - Todos os
              direitos reservados.
            </div>
          </div>

          {/* Segundo bloco: Contato */}
          <div className="sm:col-span-6 lg:col-span-6">
            <h6 className="mb-4 text-sm font-semibold text-gray-900">
              Contato
            </h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 h-4 w-4 text-gray-600" />
                <a
                  href="tel:+5511999999999"
                  className="text-gray-600 hover:text-gray-900"
                >
                  +55 (31) 98985-8037
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 h-4 w-4 text-gray-600" />
                <a
                  href="mailto:contato@promethea.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  prometheasolutions@proton.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Texto grande */}
        <div
          className="mt-5 relative -mt-16 h-40 w-full sm:h-60 md:h-80 lg:h-96"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center font-bold leading-none">
            <span className="bg-gradient-to-b from-gray-200 to-gray-100/30 bg-clip-text text-[60px] text-transparent sm:text-[100px] md:text-[150px] lg:text-[200px]">
              Promethea
            </span>
          </div>
          {/* Brilho */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 sm:translate-y-2/3"
            aria-hidden="true"
          >
            <div className="h-20 w-20 rounded-full border-[5px] border-blue-700 blur-[20px] sm:h-32 sm:w-32 sm:border-[10px] sm:blur-[40px] md:h-40 md:w-40 md:border-[15px] md:blur-[60px] lg:h-56 lg:w-56 lg:border-[20px] lg:blur-[80px]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}