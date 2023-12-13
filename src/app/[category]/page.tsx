import Link from "next/link";

export default function Category({ params }: { params: { category: string } }) {
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
      <div className="max-md:mt-40">
        <h1 className="font-semibold text-xl p-2 bg-neutral-950 text-neutral-50 w-fit uppercase">
          {params.category}
        </h1>
        <div className="h-1 w-full bg-neutral-950" />
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 md:row-span-2">
        <div className="group relative h-96 max-md:h-48 overflow-hidden">
          <img
            className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
            src="https://picsum.photos/600"
            alt=""
          />
          <div className="absolute bottom-0 left-0 p-2 pt-8 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
            <h2 className="md:text-2xl font-medium text-neutral-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              assumenda doloribus quas molestias.
            </h2>
            <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </div>
        <div className="grid md:grid-rows-2 max-md:grid-cols-2 gap-2 h-96 max-md:h-48 ">
          <div className="group overflow-hidden relative ">
            <img
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
              <h2 className="font-medium text-neutral-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora assumenda doloribus quas molestias.
              </h2>
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </div>
          <div className="group overflow-hidden relative ">
            <img
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-950/50 to-transparent">
              <h2 className="font-medium text-neutral-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora assumenda doloribus quas molestias.
              </h2>
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
        <div className="md:col-span-2 flex flex-col gap-2 mb-80">
          <div className="flex flex-col items-start gap-2">
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 border border-neutral-950/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
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
                  <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                    BUDAYA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="p-2 bg-neutral-950 text-neutral-50 w-fit hover:bg-neutral-950/90 duration-300">
            LAINYA
          </button>
        </div>
        <div className="flex flex-col gap-2 mb-80 md:mt-[25.25rem]">
          <div>
            <h1 className="font-semibold p-2 text-xl bg-neutral-950 text-neutral-50 w-fit uppercase">
              REKOMENDASI
            </h1>
          </div>
          <Link
            href="/"
            className="grid border border-neutral-950/30 grid-rows-2 w-full h-[24.5rem] gap-2"
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
                <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                  BUDAYA
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-semibold p-2 text-xl bg-neutral-950 text-neutral-50 w-fit uppercase">
            ARTIKEL POPULER
          </h1>
          <div className="h-1 w-full bg-neutral-950" />
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-950/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-950 text-neutral-50 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
