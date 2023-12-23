export default function Account() {
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Account</h1>
        <p>Halaman untuk melakukan setting account.</p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold ">Tampilan profile anda:</h2>
          <div className="flex items-center gap-2 border border-neutral-900/30 w-fit p-2 shadow-md">
            <img
              className="w-16 rounded-full"
              src="https://picsum.photos/600"
              alt=""
            />
            <div>
              <p className="font-semibold text-xl uppercase">Sabirin Lamno</p>
              <p className="-mt-1">Editor</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold">Edit profile:</p>
          <form className="flex flex-col gap-7 w-1/3" action="">
            <input
              className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
              type="text"
              placeholder="Nama"
            />
            <div>
              <label className="font-semibold" htmlFor="image">
                Foto
              </label>
              <input
                className="bg-transparent text-sm focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-neutral-900/50"
                type="file"
              />
            </div>
            <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
              Edit
            </button>
          </form>
        </div>
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
      </div>
    </div>
  );
}
