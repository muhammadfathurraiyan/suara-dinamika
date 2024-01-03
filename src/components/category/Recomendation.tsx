import Link from "next/link";

export default function Recomendation() {
  return (
    <div className="flex flex-col gap-2 mb-80 md:mt-[25.25rem]">
      <div>
        <h1 className="font-semibold p-2 text-xl bg-neutral-900 text-neutral-100 w-fit uppercase">
          REKOMENDASI
        </h1>
      </div>
      <Link
        href="/"
        className="grid border border-neutral-900/30 grid-rows-2 w-full h-[24.5rem] gap-2"
      >
        <div className=" group overflow-hidden">
          <img
            className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
            src="https://picsum.photos/600"
            alt=""
          />
        </div>
        <div className="flex flex-col p-2 justify-between items-start">
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
        </div>
      </Link>
      <Link
        href="/"
        className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="font-medium md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            sapiente quos. Eum, recusandae.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            sapiente quos. Eum, recusandae.
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
  );
}
