import Terbaru from "@/components/home/Terbaru";
import Lingkungan from "@/components/home/Lingkungan";
import Opini from "@/components/home/Opini";
import Teknologi from "@/components/home/Teknologi";
import Sejarah from "@/components/home/Sejarah";
import Sajak from "@/components/home/Sajak";
import readLatesArticleAction from "@/actions/global/readLatesArticleAction";

export const revalidate = 0;

export default async function Home() {
  const { data } = await readLatesArticleAction();
  return (
    <>
      <Terbaru data={data} />
      <Opini />
      <Lingkungan />
      <Teknologi />
      <Sejarah />
      <Sajak />
    </>
  );
}
