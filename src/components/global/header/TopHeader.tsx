"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiInstagramLogo, PiLinkedinLogo, PiYoutubeLogo } from "react-icons/pi";

export default function TopHeader() {
  const path = usePathname();
  return (
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
  );
}
