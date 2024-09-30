import Link from "next/link";
import Logo from "./logo";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Área superior: Blocos */}
        <div
          className={`grid gap-8 py-8 sm:grid-cols-12 md:py-10 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          }`}
        >
          {/* Primeiro bloco */}
          <div className="sm:col-span-12 md:col-span-6">
            <div>
              <Logo />
            </div>
            <div className="mt-2 text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Promethea Solutions - Todos os
              direitos reservados.
            </div>
          </div>

          {/* Segundo bloco: Contato */}
          <div className="sm:col-span-6 md:col-span-6">
            <h6 className="mb-3 text-sm font-semibold text-gray-900">Contato</h6>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 h-4 w-4 text-gray-600" />
                <a
                  href="tel:+5531989858037"
                  className="text-gray-600 hover:text-gray-900"
                >
                  +55 (31) 98985-8037
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 h-4 w-4 text-gray-600" />
                <a
                  href="mailto:prometheasolutions@proton.me"
                  className="text-gray-600 hover:text-gray-900"
                >
                  prometheasolutions@proton.me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}