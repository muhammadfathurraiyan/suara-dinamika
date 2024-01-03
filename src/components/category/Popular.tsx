import Link from "next/link";

export default function Popular() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="font-semibold p-2 text-xl bg-neutral-900 text-neutral-100 w-fit uppercase">
          ARTIKEL POPULER
        </h1>
        <div className="h-1 w-full bg-neutral-900" />
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
        <Link
          href="/"
          className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sapiente quos. Eum, recusandae.
            </h2>
            <p className="text-xs">&#8226; 10 menit yang lalu</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sapiente quos. Eum, recusandae.
            </h2>
            <p className="text-xs">&#8226; 10 menit yang lalu</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sapiente quos. Eum, recusandae.
            </h2>
            <p className="text-xs">&#8226; 10 menit yang lalu</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sapiente quos. Eum, recusandae.
            </h2>
            <p className="text-xs">&#8226; 10 menit yang lalu</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sapiente quos. Eum, recusandae.
            </h2>
            <p className="text-xs">&#8226; 10 menit yang lalu</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-medium md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sapiente quos. Eum, recusandae.
            </h2>
            <p className="text-xs">&#8226; 10 menit yang lalu</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
