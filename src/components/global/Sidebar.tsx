"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiArticle,
  PiChartLine,
  PiHouse,
  PiSignOut,
  PiTextColumns,
  PiUserCircleGear,
  PiUserCirclePlus,
} from "react-icons/pi";

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="absolute left-0 inset-y-0 w-1/5 bg-neutral-900 text-neutral-100 px-4 py-12 flex flex-col gap-12">
      <div className="flex items-center gap-2">
        <img
          className="w-12 rounded-full"
          src="https://picsum.photos/600"
          alt=""
        />
        <div>
          <p className="font-semibold uppercase">Sabirin Lamno</p>
          <p className="text-xs -mt-1">Editor</p>
        </div>
      </div>
      <ul className="">
        <li>
          <Link
            className={`flex items-center gap-2 p-2 hover:text-neutral-100 rounded-md ${
              path === "/admin"
                ? "bg-neutral-800 border border-neutral-700 text-neutral-100"
                : "text-neutral-400"
            }`}
            href="/admin"
          >
            <PiHouse size={20} /> Beranda
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-2 p-2 hover:text-neutral-100 rounded-md ${
              path === "/admin/article"
                ? "bg-neutral-800 border border-neutral-700 text-neutral-100"
                : "text-neutral-400"
            }`}
            href="/admin/article"
          >
            <PiArticle size={20} /> Article
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-2 p-2 hover:text-neutral-100 rounded-md ${
              path === "/admin/all-article"
                ? "bg-neutral-800 border border-neutral-700 text-neutral-100"
                : "text-neutral-400"
            }`}
            href="/admin/all-article"
          >
            <PiTextColumns size={20} /> Semua Article
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-2 p-2 hover:text-neutral-100 rounded-md ${
              path === "/admin/insight"
                ? "bg-neutral-800 border border-neutral-700 text-neutral-100"
                : "text-neutral-400"
            }`}
            href="/admin/insight"
          >
            <PiChartLine size={20} /> Insight
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-2 p-2 hover:text-neutral-100 rounded-md ${
              path === "/admin/account"
                ? "bg-neutral-800 border border-neutral-700 text-neutral-100"
                : "text-neutral-400"
            }`}
            href="/admin/account"
          >
            <PiUserCircleGear size={20} /> Account
          </Link>
        </li>
        <li>
          <Link
            className={`flex items-center gap-2 p-2 hover:text-neutral-100 rounded-md ${
              path.startsWith("/admin/user")
                ? "bg-neutral-800 border border-neutral-700 text-neutral-100"
                : "text-neutral-400"
            }`}
            href="/admin/user"
          >
            <PiUserCirclePlus size={20} /> User
          </Link>
        </li>
      </ul>
      <Link
        className={`flex items-center gap-2 p-2 text-neutral-400 hover:text-neutral-100 rounded-md`}
        href="/logout"
      >
        <PiSignOut size={20} /> Logout
      </Link>
    </aside>
  );
}
