"use client";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaAngleDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="text-neutral-50 py-1 flex item-center justify-between px-52 max-xl:px-8 max-md:px-4 text-xs bg-neutral-950">
        <div className="flex items-center gap-2">
          <h1 className="mr-4">Suara Dinamika.</h1>
          <Link className="max-md:hidden" href="/">
            Beranda
          </Link>
          <Link className="max-md:hidden" href="/">
            Tentang
          </Link>
          <Link className="max-md:hidden" href="/">
            Kontak
          </Link>
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
      <div className="px-52 max-xl:px-8 max-md:px-4 max-md:hidden">
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
      <nav className="flex px-52 max-xl:px-8 max-md:px-4 items-center justify-between py-2 border-y border-neutral-950">
        <div className="md:hidden px-4 py-3 bg-neutral-950 text-neutral-50 ">
          <h1 className="font-bold">SUARA DINAMIKA</h1>
        </div>
        <div onClick={handleToggle} className="cursor-pointer md:hidden">
          <FaBars size={24} />
        </div>
        <Link className="group relative max-md:hidden" href="/">
          BUDAYA
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/">
          EDUKASI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/">
          LINGKUNGAN
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/">
          OPINI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/">
          SEJARAH
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/">
          SENI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/">
          TEKNOLOGI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-950 left-0 bottom-0" />
        </Link>
        <div className="relative group max-md:hidden p-2 flex items-center">
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
      <aside
        className={`${toggle ? "visible opacity-100 translate-x-0" : "invisible opacity-0 translate-x-96"} md:hidden duration-300 flex flex-col fixed right-0 top-0 bottom-0 w-full bg-neutral-950 text-neutral-50 p-8 gap-2 `}
      >
        <div className="mt-6 mb-4">
          <h1 className="text-2xl font-bold">SUARA DINAMIKA</h1>
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-12 bg-neutral-50" />
            <p className="text-xs italic font-light">Unik & Terpercaya.</p>
          </div>
        </div>
        <Link className="group relative w-fit" href="/">
          BUDAYA
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          EDUKASI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          LINGKUNGAN
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          OPINI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          SEJARAH
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          SENI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          TEKNOLOGI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-50 left-0 bottom-0" />
        </Link>
        <div
          onClick={handleToggle}
          className="cursor-pointer p-1 rounded-full border w-fit absolute right-4 top-4"
        >
          <FaTimes size={12} />
        </div>
      </aside>
    </header>
  );
}
