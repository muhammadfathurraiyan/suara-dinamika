"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  PiArticle,
  PiChartLine,
  PiHouse,
  PiTextColumns,
  PiUserCircleGear,
  PiUserCirclePlus,
} from "react-icons/pi";

export default function Navigation({ hidden }: { hidden: string }) {
  const path = usePathname();

  return (
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
            hidden === "hidden" ? "hidden" : ""
          } ${
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
            hidden === "hidden" ? "hidden" : ""
          } ${
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
  );
}
