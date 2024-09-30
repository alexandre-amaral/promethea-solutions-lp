import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 z-30 w-full font-sans">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Navigation container */}
        <nav className="relative flex h-16 items-center justify-between gap-3 rounded-xl bg-gray-100/90 px-5 shadow-lg backdrop-blur-sm border border-gray-200">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Promethea Solutions
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} // Adicionando aria-label para acessibilidade
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation links */}
          <ul className="hidden lg:flex flex-1 items-center justify-end gap-8">
            <li>
              <Link href="#about" className="text-gray-800 hover:text-blue-600">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-800 hover:text-blue-600">
                Soluções
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-800 hover:text-blue-600">
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-white bg-[#192B38] hover:bg-[#1f3543] focus:ring-4 focus:ring-[#1f3543] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
              >
                Comece Agora
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="mt-2 rounded-lg bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col space-y-4 p-4 text-center">
              <li>
                <Link href="#about" className="text-gray-800 hover:text-blue-600">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-800 hover:text-blue-600">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-800 hover:text-blue-600">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white bg-[#192B38] hover:bg-[#1f3543] focus:ring-4 focus:ring-[#1f3543] font-medium rounded-lg text-sm px-4 py-2"
                >
                  Comece Agora
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}