export default function Edukasi() {
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
      <div>
        <h1 className="font-semibold text-xl p-2 bg-neutral-900 text-neutral-100 w-fit">
          EDUKASI
        </h1>
        <div className="h-1 w-full bg-neutral-900" />
      </div>
      <div className="grid md:grid-cols-3 max-md:grid-rows-3 items-start gap-2">
        <div className="grid border border-neutral-900/30 grid-rows-2 w-full h-96 gap-2">
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
        </div>
        <div className="grid border border-neutral-900/30 grid-rows-2 w-full h-96 gap-2">
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
        </div>
        <div className="grid border border-neutral-900/30 grid-rows-2 w-full h-96 gap-2">
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
        </div>
      </div>
    </section>
  );
}
