import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import tattooImage from "@/app/_assets/tattoo.png";

export default function Contato() {
  return (
    <main className="flex gap-1 justify-between">
      <section className="min-w-64">
        <h1 className="text-3xl font-black mt-12">
          Entre em <span className="text-yellow-400">Contato</span>
        </h1>

        <p className="mt-10 font-light text-zinc-400">
          Clique no botão abaixo envie uma mensagem. Vamos conversar!
        </p>
        <Link
          target="_blank"
          href="https://wa.me//55119999999?text=Ol%C3%A1%20Sandro%20%21%20Entrei%20pelo%20seu%20site%20e%20tenho%20interesse%20em%20uma%20tattoo%20%21%20Pode%20me%20dar%20mais%20detalhes%20%3F"
        >
          <button className="bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded flex items-center gap-4 mt-10">
            <FaWhatsapp className="w-8 h-8" />
            <div>
              <p>Enviar Whatsapp</p>
              <p className="text-zinc-500 text-xs">(55 11 99999 9999)</p>
            </div>
          </button>
        </Link>
      </section>

      <Image
        width="600"
        src={tattooImage}
        alt="Sandro Luz fazendo uma tatuagem"
      />
    </main>
  );
}
