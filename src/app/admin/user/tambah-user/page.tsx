import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

export default function TambahUser() {
  return (
    <div className="relative px-4 py-12 flex flex-col gap-12">
      <Link
        href="/admin/user"
        className="absolute top-3 hover:text-neutral-900/90 duration-300 flex items-center gap-1 font-bold"
        aria-label="Arrow Right"
      >
        <PiArrowLeftBold /> Kembali
      </Link>
      <div>
        <h1 className="text-3xl font-black uppercase">Tambah User</h1>
        <p>Halaman tambah user.</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold">Form tambah user:</p>
        <form className="flex flex-col gap-7 w-1/3" action="">
          <input
            className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
            type="text"
            placeholder="Nama"
          />
          <input
            className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
            type="text"
            placeholder="Email"
          />
          <input
            className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
            type="password"
            placeholder="Password"
          />
          <select className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50">
            <option value="1">Admin</option>
            <option value="2">Super Admin</option>
          </select>
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
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}
