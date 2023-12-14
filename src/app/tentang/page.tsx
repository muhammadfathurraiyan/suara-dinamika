import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default function Tentang() {
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4">
      <div className="min-h-screen relative flex flex-col justify-center gap-2 md:w-2/3">
        <h1 className="text-[7rem] max-md:text-6xl leading-none font-black text-neutral-900">
          SUARA DINAMIKA
        </h1>
        <p className="md:text-lg md:w-2/3 leading-loose text-neutral-900/70">
          Media literasi digital dengan informasi unik dan terpercaya.
        </p>
        <Link
          href="#tentang"
          aria-label="ArrowDown"
          className="absolute bottom-20 text-neutral-900/90 md:text-2xl animate-bounce"
        >
          <FaArrowDown />
        </Link>
      </div>
      <div
        id="tentang"
        className="min-h-screen flex flex-col justify-center md:w-2/3 gap-2"
      >
        <h1 className="font-black text-5xl max-md:text-4xl text-neutral-900">
          Tentang Kami
        </h1>
        <p className="md:text-lg leading-loose text-neutral-900/70">
          Seperti namanya Suara Dinamika merupakan media literasi digital yang
          dikembangkan dengan tujuan untuk memberikan informasi-informasi yang
          unik, terpercaya serta bermanfaat terus menerus dan memberikan
          pengalaman membaca terbaik kepada pengguna.
        </p>
        <p className="md:text-lg leading-loose text-neutral-900/70">
          Anda dapat mengisi <Link href="#kontak" className="font-semibold text-neutral-900/90 relative group">form dibawah<span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900/90 left-0 bottom-0" /></Link> kami untuk proses <span className="font-semibold text-neutral-900/90">advertise</span> atau <span className="font-semibold text-neutral-900/90">periklanan</span>.
        </p>
      </div>
      <div id="kontak" className="min-h-screen flex flex-col justify-center md:w-2/3 gap-12">
        <h1 className="font-black text-5xl max-md:text-4xl text-neutral-900">Kontak</h1>
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
          <button className="px-12 py-4 rounded md:text-lg bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
