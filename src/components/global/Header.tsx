"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  PiCaretDown,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiList,
  PiMagnifyingGlass,
  PiX,
  PiYoutubeLogo,
} from "react-icons/pi";

export default function Header() {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="text-neutral-100 py-1 flex item-center justify-between px-36 max-xl:px-12 max-md:px-4 text-xs bg-neutral-900">
        <div className="flex items-center gap-4">
          <Link href="/" className="mr-8">
            Suara Dinamika.
          </Link>
          <Link className="max-md:hidden" href="/tentang">
            Tentang
          </Link>
          <Link
            className="max-md:hidden"
            href={path === "/tentang" ? "#tentang" : "/tentang#tentang"}
          >
            Advertise
          </Link>
          <Link
            className="max-md:hidden"
            href={path === "/tentang" ? "#kontak" : "/tentang#kontak"}
          >
            Kontak
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link aria-label="Instagram" href="/">
            <PiInstagramLogo size={18} />
          </Link>
          <Link aria-label="Linkedin" href="/">
            <PiLinkedinLogo size={18} />
          </Link>
          <Link aria-label="Youtube" href="/">
            <PiYoutubeLogo size={18} />
          </Link>
        </div>
      </div>
      <div
        className={`px-36 ${path === "/" ? "mt-80" : "mt-0"} ${
          path === "/auth" || path.startsWith("/admin") || path === "/tentang"
            ? "hidden"
            : ""
        } max-xl:px-12 max-md:px-4 max-md:hidden`}
      >
        <div className="flex items-center justify-between py-8">
          <Link
            href="/"
            className="px-12 py-4 bg-neutral-900 text-neutral-100 "
          >
            <h1 className="text-3xl font-bold">SUARA DINAMIKA</h1>
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-12 bg-neutral-100" />
              <p className="text-xs italic font-light">Unik & Terpercaya.</p>
            </div>
          </Link>
          <div>
            <form className="flex items-center relative" action="">
              <input
                type="text"
                placeholder="Cari Artikel"
                className="border border-neutral-900 p-1 w-72 focus:outline-none bg-transparent"
              />
              <button
                aria-label="Search"
                className="absolute right-0 p-2 flex items-center gap-2 text-neutral-100 bg-neutral-900 hover:bg-neutral-900/90 duration-300"
              >
                <PiMagnifyingGlass size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <nav
        className={`${
          path === "/auth" || path.startsWith("/admin") || path === "/tentang"
            ? "hidden"
            : ""
        } flex px-36 max-xl:px-12 max-md:px-4 items-center justify-between py-2 border-y border-neutral-900`}
      >
        <div className="md:hidden p-2 text-xl bg-neutral-900 text-neutral-100 ">
          <h1 className="font-bold">SUARA DINAMIKA</h1>
        </div>
        <div onClick={handleToggle} className="cursor-pointer md:hidden">
          <PiList size={28} />
        </div>
        <Link className="group relative max-md:hidden" href="/budaya">
          BUDAYA
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/edukasi">
          EDUKASI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/lingkungan">
          LINGKUNGAN
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/opini">
          OPINI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/sejarah">
          SEJARAH
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/seni">
          SENI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/teknologi">
          TEKNOLOGI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <Link className="group relative max-md:hidden" href="/travel">
          TRAVEL
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
        </Link>
        <div className="relative group max-md:hidden p-2 flex items-center">
          LAINYA <PiCaretDown className="group-hover:rotate-180 duration-300" />
          <div className="absolute z-20 invisible group-hover:visible opacity-0 group-hover:opacity-100 flex duration-300 bg-neutral-100 border border-neutral-900/30 flex-col gap-2 items-start left-0 top-10 px-2 py-4">
            <Link className="relative group/link" href="/">
              SEJARAH
              <span className="absolute duration-300 h-[1px] w-0 group-hover/link:w-full bg-neutral-900 left-0 bottom-0" />
            </Link>
            <Link className="relative group/link" href="/">
              SENI
              <span className="absolute duration-300 h-[1px] w-0 group-hover/link:w-full bg-neutral-900 left-0 bottom-0" />
            </Link>
            <Link className="relative group/link" href="/">
              TEKNOLOGI
              <span className="absolute duration-300 h-[1px] w-0 group-hover/link:w-full bg-neutral-900 left-0 bottom-0" />
            </Link>
          </div>
        </div>
      </nav>
      <aside
        className={`${
          toggle
            ? "visible opacity-100 translate-x-0"
            : "invisible opacity-0 translate-x-96"
        } z-20 md:hidden duration-300 flex flex-col fixed right-0 top-0 bottom-0 w-full bg-neutral-900 text-neutral-100 p-8 gap-2 `}
      >
        <div className="mt-6 mb-4">
          <h1 className="text-2xl font-bold">SUARA DINAMIKA</h1>
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-12 bg-neutral-100" />
            <p className="text-xs italic font-light">Unik & Terpercaya.</p>
          </div>
        </div>
        <Link className="group relative w-fit" href="/">
          BUDAYA
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          EDUKASI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          LINGKUNGAN
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          OPINI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          SEJARAH
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          SENI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <Link className="group relative w-fit" href="/">
          TEKNOLOGI
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
        </Link>
        <div
          onClick={handleToggle}
          className="cursor-pointer p-1 rounded-full border w-fit absolute right-4 top-4"
        >
          <PiX size={12} />
        </div>
      </aside>
    </header>
  );
}
