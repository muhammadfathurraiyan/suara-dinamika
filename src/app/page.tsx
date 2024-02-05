import Terbaru from "@/components/home/Terbaru";
import Berita from "@/components/home/Berita";
import Lingkungan from "@/components/home/Lingkungan";
import Opini from "@/components/home/Opini";
import Teknologi from "@/components/home/Teknologi";
import Sejarah from "@/components/home/Sejarah";
import Sajak from "@/components/home/Sajak";

export const revalidate = 0;

export default async function Home() {
  return (
    <>
      <Terbaru />
      <Opini />
      <Lingkungan />
      <Teknologi />
      <Sejarah />
      <Sajak />
    </>
  );
}
