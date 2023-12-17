import Editor from "@/components/admin/article/Editor";
import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

export default function Crud({ params }: { params: { crud: string } }) {
  return (
    <div className="relative px-4 py-12 flex flex-col gap-12">
      <Link
        href="/admin/article"
        className="absolute top-3 hover:text-neutral-900/90 duration-300 flex items-center gap-1 font-bold"
        aria-label="Arrow Right"
      >
        <PiArrowLeftBold /> Kembali
      </Link>
      <div>
        <h1 className="text-3xl font-black uppercase">
          {params.crud.replace("-", " ")}
        </h1>
        <p>Halaman {params.crud.replace("-", " ")}.</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold">
          Form {params.crud.replace("-", " ")}:
        </p>
        <form className="flex flex-col gap-7 w-full" action="">
          <input
            className="bg-transparent w-1/3 focus:outline-none p-2 border-b border-neutral-900/30 focus:border-b-2 focus:border-neutral-900/50"
            type="text"
            placeholder="Judul"
          />
          <input
            className="bg-transparent w-1/3 focus:outline-none p-2 border-b border-neutral-900/30 focus:border-b-2 focus:border-neutral-900/50"
            type="text"
            placeholder="Slug"
          />
          <select
            required
            className="bg-transparent w-1/3 required:invalid:text-neutral-900/50 focus:outline-none p-2 border-b border-neutral-900/30 focus:border-b-2 focus:border-neutral-900/50"
          >
            <option value="" disabled selected hidden>
              Pilih Kategori
            </option>
            <option className="text-neutral-900" value="1">
              Budaya
            </option>
            <option className="text-neutral-900" value="2">
              Teknologi
            </option>
          </select>
          <div>
            <label className="font-semibold" htmlFor="image">
              Foto
            </label>
            <input
              className="bg-transparent w-1/3 text-sm focus:outline-none p-2 border border-neutral-900/30 focus:border-neutral-900/50"
              type="file"
            />
          </div>
          <Editor />
          <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}
