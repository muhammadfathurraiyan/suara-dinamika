export default function EditPassword() {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-bold">Ganti password:</p>
      <form className="flex flex-col gap-7 w-1/3" action="">
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="password"
          placeholder="Password Lama"
        />
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="password"
          placeholder="Password Baru"
        />
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="password"
          placeholder="Konfirmasi Password Baru"
        />
        <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          Submit
        </button>
      </form>
    </div>
  );
}
