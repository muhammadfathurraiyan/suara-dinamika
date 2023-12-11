import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col items-center justify-center gap-4 bg-neutral-950 text-neutral-50">
      <div className="flex items-center flex-col">
        Ikuti kami di sosial media :
        <div className="flex items-center gap-2">
          <Link aria-label="Instagram" href="/">
            <FaInstagram size={24} />
          </Link>
          <Link aria-label="Linkedin" href="/">
            <FaLinkedin size={24} />
          </Link>
          <Link aria-label="Youtube" href="/">
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-2 border-y w-full border-neutral-950">
        <Link className="group relative" href="/">
          Beranda
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        |
        <Link className="group relative" href="/">
          Tentang
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        |
        <Link className="group relative" href="/">
          Kontak
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
      </nav>
      <p className="text-center text-xs">
        Copyright &copy; 2023 SUARA DINAMIKA.
      </p>
    </footer>
  );
}

export default Footer;
