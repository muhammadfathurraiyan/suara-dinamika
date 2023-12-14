import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col items-center justify-center gap-4 bg-neutral-900 text-neutral-100">
      <div className="flex items-center flex-col">
        <p className="">Ikuti kami di sosial media :</p>
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
      <nav className="flex flex-wrap items-center justify-center gap-2 w-full">
        <Link className="group relative" href="/">
          Tentang
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        &#8226;
        <Link className="group relative" href="/">
          Advertise
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        &#8226;
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
