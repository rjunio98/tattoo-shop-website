import Image from "next/image";
import { londrinaSolid } from "./_lib/font";
import portrait from "@/app/_assets/portrait.png";

export default function Home() {
  return (
    <main className="relative flex-1">
      <h1
        className={`absolute -z-10 text-[400px] text-zinc-800 -left-20 -top-0 leading-tight ${londrinaSolid.className}`}
      >
        Tattoo
      </h1>
      <div className="font-black text-zinc-600 text-8xl pt-56 uppercase">
        <h2>Inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className="text-yellow-400">Tatue-se</h2>
      </div>

      <Image
        width="400"
        className="absolute -right-16 -bottom-20 grayscale"
        src={portrait}
        alt="Retrato de Sandro Luz"
      />
    </main>
  );
}
