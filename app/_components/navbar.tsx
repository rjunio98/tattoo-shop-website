import Image from "next/image";
import logo from "@/app/_assets/logo.svg";
import { londrinaSolid } from "../_lib/font";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className={`container flex justify-between py-8 ${londrinaSolid.className}`}
    >
      <Image
        src={logo}
        alt="Logo"
      />
      <ul className="flex gap-6 text-3xl">
        <li>Serviços</li>
        <li>Sobre mim</li>
        <li className="text-right">
          Contato
          <span className="text-xs text-zinc-400 font-extralight flex gap-1 items-center">
            <FaWhatsapp />
            (+55 11 99999 9999)
          </span>
        </li>
      </ul>
    </nav>
  );
}
