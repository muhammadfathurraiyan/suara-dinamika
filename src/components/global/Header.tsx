"use client";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaAngleDown,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="text-neutral-50 py-1  flex item-center justify-between px-52  max-xl:px-8 text-xs bg-neutral-950">
        <div className="flex items-center gap-2">
          <h1 className="mr-4">Suara Dinamika.</h1>
          <Link href="/">Beranda</Link>
          <Link href="/">Tentang</Link>
          <Link href="/">Kontak</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link aria-label="Instagram" href="/">
            <FaInstagram size={14} />
          </Link>
          <Link aria-label="Linkedin" href="/">
            <FaLinkedin size={14} />
          </Link>
          <Link aria-label="Youtube" href="/">
            <FaYoutube size={14} />
          </Link>
        </div>
      </div>
      <div className="px-52 max-xl:px-8">
        <div className="flex items-center justify-between py-8">
          <div className="px-4 py-3 bg-neutral-950 text-neutral-50 ">
            <h1 className="text-3xl font-bold">SUARA DINAMIKA</h1>
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-12 bg-neutral-50" />
              <p className="text-xs italic font-light">Unik & Terpercaya.</p>
            </div>
          </div>
          <div>
            <form className="flex items-center relative" action="">
              <input
                type="text"
                placeholder="Cari Artikel"
                className="border border-neutral-950 p-1 w-72 focus:outline-none"
              />
              <button
                aria-label="Search"
                className="absolute right-0 p-2 flex items-center gap-2 text-neutral-50 bg-neutral-950"
              >
                <FaMagnifyingGlass />
              </button>
            </form>
          </div>
        </div>
      </div>
      <nav className="flex px-52 max-xl:px-8 items-center justify-between py-2 border-y border-neutral-950">
        <Link className="group relative" href="/">
          BUDAYA
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative" href="/">
          EDUKASI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative" href="/">
          LINGKUNGAN
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative" href="/">
          OPINI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative" href="/">
          SEJARAH
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative" href="/">
          SENI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative" href="/">
          TEKNOLOGI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <div className="relative group p-2 flex items-center">
          LAINYA <FaAngleDown />
          <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 flex duration-300 bg-neutral-50 border border-neutral-950/30 flex-col gap-2 items-start left-0 top-10 px-2 py-4">
            <Link className="relative group/link" href="/">
              SEJARAH
              <span className="absolute duration-300 h-[1px] w-0 group-hover/link:w-full bg-neutral-950 left-0 bottom-0" />
            </Link>
            <Link className="relative group/link" href="/">
              SENI
              <span className="absolute duration-300 h-[1px] w-0 group-hover/link:w-full bg-neutral-950 left-0 bottom-0" />
            </Link>
            <Link className="relative group/link" href="/">
              TEKNOLOGI
              <span className="absolute duration-300 h-[1px] w-0 group-hover/link:w-full bg-neutral-950 left-0 bottom-0" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
