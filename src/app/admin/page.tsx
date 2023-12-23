import Calendar from "@/components/admin/insight/Calendar";
import Link from "next/link";

export default function Beranda() {
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Beranda</h1>
        <p>Halaman beranda.</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="px-2 py-8 border border-neutral-900/30 shadow-md rounded">
          <p className="text-xl">
            Hallo <b>Sabirin Lamno</b> 👋
          </p>
          <p className="text-xl">
            selamat datang silahkan pilih menu tertentu untuk melanjutkan.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-4 w-4/5 p-2 rounded border border-neutral-900/30 shadow-md">
            <div>
              <h2 className="text-xl font-bold">Kontribusi</h2>
              <p>Jumlah kontribusi tahun ini</p>
            </div>
            <Calendar />
          </div>
          <div className="w-1/5 h-full flex flex-col gap-4 rounded p-2 border border-neutral-900/30 shadow-md">
            <div>
              <h2 className="text-xl font-bold">Kontribusi</h2>
              <p>Kontribusi saya</p>
            </div>
            <p className="text-6xl font-bold text-center">10</p>
            <div>
              <p>Article terbaru saya:</p>
              <ul className="list-inside list-decimal">
                <li className="truncate max-w-fit">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa enim blanditiis veniam aspernatur?
                </li>
                <li className="truncate max-w-fit">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa enim blanditiis veniam aspernatur?
                </li>
                <li className="truncate max-w-fit">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa enim blanditiis veniam aspernatur?
                </li>
                <li className="truncate max-w-fit">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa enim blanditiis veniam aspernatur?
                </li>
                <li className="truncate max-w-fit">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa enim blanditiis veniam aspernatur?
                </li>
              </ul>
            </div>
            <Link href="/" className="text-center underline font-medium">
              Lihat semua...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
