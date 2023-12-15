import Link from "next/link";

export default function About() {
  return (
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
        Anda dapat mengisi{" "}
        <Link
          href="#kontak"
          className="font-semibold text-neutral-900/90 relative group"
        >
          form dibawah
          <span className="absolute duration-300 h-[1px] w-0 group-hover:w-full bg-neutral-900/90 left-0 bottom-0" />
        </Link>{" "}
        kami untuk proses{" "}
        <span className="font-semibold text-neutral-900/90">advertise</span>{" "}
        atau{" "}
        <span className="font-semibold text-neutral-900/90">periklanan</span>.
      </p>
    </div>
  );
}
