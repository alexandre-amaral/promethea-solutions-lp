import Link from "next/link";
import Image from "next/image";
import PrometheaLogo from "@/public/images/logo.png"; // Caminho para o logotipo

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Promethea Solutions">
      <Image
        src={PrometheaLogo}
        alt="Promethea Solutions Logo"
        width={90 } // Ajuste o tamanho do logotipo
        height={30}
        className="object-contain h-full" // Garante que a logo se ajuste sem ultrapassar
      />
    </Link>
  );
}