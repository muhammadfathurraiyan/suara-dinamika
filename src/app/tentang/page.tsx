import About from "@/components/tentang/About";
import Beranda from "@/components/tentang/Beranda";
import Kontak from "@/components/tentang/Kontak";

export default function Tentang() {
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4">
      <Beranda />
      <About />
      <Kontak />
    </section>
  );
}
