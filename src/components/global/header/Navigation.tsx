"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiCaretDown, PiList, PiX } from "react-icons/pi";

export default function Navigation({
  data,
}: {
  data:
    | {
        category: string;
      }[]
    | null;
}) {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav
        className={`${
          path === "/auth" || path.startsWith("/admin") || path === "/tentang"
            ? "hidden"
            : ""
        } flex px-36 max-xl:px-12 max-md:px-4 items-center justify-between py-4 border-y border-neutral-900`}
      >
        <div className="md:hidden p-2 text-xl bg-neutral-900 text-neutral-100 ">
          <h1 className="font-bold">SUARA DINAMIKA</h1>
        </div>
        <div onClick={handleToggle} className="cursor-pointer md:hidden">
          <PiList size={28} />
        </div>
        {data?.map((data) => (
          <Link
            key={data.category}
            className="group relative uppercase max-md:hidden"
            href={`/${data.category}`}
          >
            {data.category}
            <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900 left-0 bottom-0" />
          </Link>
        ))}
      </nav>
      <aside
        className={`${
          toggle
            ? "visible opacity-100 translate-x-0"
            : "invisible opacity-0 translate-x-96"
        } z-20 md:hidden overflow-x-auto duration-300 flex flex-col fixed right-0 top-0 bottom-0 w-full bg-neutral-900 text-neutral-100 p-8 gap-2 `}
      >
        <div className="mt-6 mb-4">
          <h1 className="text-2xl font-bold">SUARA DINAMIKA</h1>
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-12 bg-neutral-100" />
            <p className="text-xs italic font-light">Unik & Komunikatif.</p>
          </div>
        </div>
        {data?.map((data) => (
          <Link
            key={data.category}
            className="group uppercase relative w-fit"
            href={`/${data.category}`}
          >
            {data.category}
            <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-100 left-0 bottom-0" />
          </Link>
        ))}
        <div
          onClick={handleToggle}
          className="cursor-pointer p-1 rounded-full border w-fit absolute right-4 top-4"
        >
          <PiX size={12} />
        </div>
      </aside>
    </>
  );
}
