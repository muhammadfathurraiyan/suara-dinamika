import sejarah from "@/assets/sejarah.jpg";

export default function Sejarah() {
  return (
    <section
      style={{ backgroundImage: `url(${sejarah.src})` }}
      className="px-36 max-xl:px-12 max-md:px-4 py-16 flex flex-col gap-2 relative bg-bottom bg-no-repeat bg-cover"
    >
      <div className="z-10">
        <h1 className="font-semibold text-xl p-2 bg-neutral-900 text-neutral-100 w-fit">
          SEJARAH
        </h1>
        <div className="h-1 w-full bg-neutral-900 md:hidden" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-900/70 to-transparent" />
      <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-2">
        <div className="group h-48 relative overflow-hidden">
          <img
            className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
            src="https://picsum.photos/600"
            alt=""
          />
          <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
            <h2 className="font-medium max-md:text-xs text-neutral-100">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              assumenda doloribus quas molestias.
            </h2>
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </div>
        <div className="group h-48 relative overflow-hidden">
          <img
            className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
            src="https://picsum.photos/600"
            alt=""
          />
          <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
            <h2 className="font-medium max-md:text-xs text-neutral-100">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              assumenda doloribus quas molestias.
            </h2>
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </div>
        <div className="group h-48 relative overflow-hidden">
          <img
            className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
            src="https://picsum.photos/600"
            alt=""
          />
          <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
            <h2 className="font-medium text-neutral-100">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              assumenda doloribus quas molestias.
            </h2>
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              BUDAYA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
