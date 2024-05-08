import Image from "next/image";
import logo from "@/app/_assets/logo.svg";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="Logo"  
      />
      <ul>
        <li>Serviços</li>
        <li>Sobre mim</li>
        <li>Contato (+55 11 99999 9999)</li>
      </ul>
    </nav>
  );
}
