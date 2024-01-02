import Link from "next/link";
import { PiArrowDown } from "react-icons/pi";

export default function Beranda() {
  return (
    <div className="min-h-screen relative flex flex-col justify-center gap-2 md:w-2/3">
      <h1 className="text-[7rem] max-md:text-6xl leading-none font-black text-neutral-900">
        SUARA DINAMIKA
      </h1>
      <p className="md:text-lg md:w-2/3 leading-loose text-neutral-900/70">
        Media literasi digital dengan informasi unik dan komunikatif.
      </p>
      <Link
        href="#tentang"
        aria-label="ArrowDown"
        className="absolute bottom-20 text-neutral-900/90 md:text-2xl animate-bounce"
      >
        <PiArrowDown />
      </Link>
    </div>
  );
}
