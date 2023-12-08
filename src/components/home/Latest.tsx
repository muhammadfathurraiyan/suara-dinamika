export default function Latest() {
  return (
    <main className="px-52 max-xl:px-8 max-md:px-4 py-12 flex flex-col gap-2">
      <div>
        <h1 className="font-semibold text-xl p-2 bg-neutral-950 text-neutral-50 w-fit">
          BERITA TERBARU
        </h1>
        <div className="h-1 w-full bg-neutral-950" />
      </div>
      <div className="grid grid-rows-3 max-md:grid-rows-2 gap-1 max-md:gap-2">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 md:row-span-2">
          <div className="h-96 max-md:h-48 overflow-hidden">
            <img
              className="min-w-full max-h-full object-cover hover:scale-[1.03] duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
          </div>
          <div className="grid grid-rows-2 max-md:hidden gap-2 h-96">
            <div className="overflow-hidden">
              <img
                className="min-w-full max-h-full object-cover hover:scale-[1.03] duration-300"
                src="https://picsum.photos/600"
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                className="min-w-full max-h-full object-cover hover:scale-[1.03] duration-300"
                src="https://picsum.photos/600"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-2">
          <div className="h-48 overflow-hidden">
            <img
              className="min-w-full max-h-full object-cover hover:scale-[1.03] duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
          </div>
          <div className="h-48 overflow-hidden">
            <img
              className="min-w-full max-h-full object-cover hover:scale-[1.03] duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
          </div>
          <div className="h-48 overflow-hidden max-md:hidden">
            <img
              className="min-w-full max-h-full object-cover hover:scale-[1.03] duration-300"
              src="https://picsum.photos/600"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
