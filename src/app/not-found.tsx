import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
      <div>
        <h2 className="uppercase font-bold text-3xl text-center">Tidak ditemukan</h2>
        <p className="text-center">Halaman yang anda tuju tidak dapat ditemukan.</p>
      </div>
      <Link
        className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50"
        href="/"
      >
        Kembali
      </Link>
    </div>
  );
}
