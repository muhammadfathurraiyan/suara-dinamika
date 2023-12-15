export default function Kontak() {
  return (
    <div
      id="kontak"
      className="min-h-screen flex flex-col justify-center md:w-2/3 gap-12"
    >
      <h1 className="font-black text-5xl max-md:text-4xl text-neutral-900">
        Kontak
      </h1>
      <form className="flex flex-col gap-7" action="">
        <input
          className="bg-transparent focus:outline-none p-2 md:text-lg border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Nama"
        />
        <input
          className="bg-transparent focus:outline-none p-2 md:text-lg border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-transparent focus:outline-none p-2 md:text-lg border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Kontak"
        />
        <textarea
          className="bg-transparent focus:outline-none p-2 md:text-lg border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          placeholder="Pesan"
          rows={4}
        />
        <button className="px-12 py-4 md:text-lg bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          Submit
        </button>
      </form>
    </div>
  );
}
