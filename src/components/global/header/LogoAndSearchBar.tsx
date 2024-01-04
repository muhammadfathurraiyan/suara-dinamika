"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

export default function LogoAndSearchBar() {
  const path = usePathname();
  return (
    <div
      className={`px-36 ${path === "/" ? "mt-80" : "mt-0"} ${
        path === "/auth" || path.startsWith("/admin") || path === "/tentang"
          ? "hidden"
          : ""
      } max-xl:px-12 max-md:px-4 max-md:hidden`}
    >
      <div className="flex items-center justify-between py-8">
        <Link href="/" className="px-12 py-4 bg-neutral-900 text-neutral-100 ">
          <h1 className="text-3xl font-bold">SUARA DINAMIKA</h1>
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-12 bg-neutral-100" />
            <p className="text-xs italic font-light">Unik & Komunikatif.</p>
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
  );
}
