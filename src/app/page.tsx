import Terbaru from "@/components/home/Terbaru";
import Lingkungan from "@/components/home/Lingkungan";
import Opini from "@/components/home/Opini";
import Teknologi from "@/components/home/Teknologi";
import Sejarah from "@/components/home/Sejarah";
import Sajak from "@/components/home/Sajak";
import {
  readLatesArticleAction,
  readLatesArticleLingkunganAction,
  readLatesArticleOpiniAction,
  readLatesArticleSajakAction,
  readLatesArticleSejarahAction,
  readLatesArticleTeknologiAction,
} from "@/actions/global/readLatesArticleAction";

export const revalidate = 0;

export default async function Home() {
  const { data } = await readLatesArticleAction();
  const { data: opini } = await readLatesArticleOpiniAction();
  const { data: lingkungan } = await readLatesArticleLingkunganAction();
  const { data: teknologi } = await readLatesArticleTeknologiAction();
  const { data: sejarah } = await readLatesArticleSejarahAction();
  const { data: sajak } = await readLatesArticleSajakAction();
  return (
    <>
      <Terbaru data={data} />
      <Opini data={opini} />
      <Lingkungan data={lingkungan} />
      <Teknologi data={teknologi} />
      <Sejarah data={sejarah} />
      <Sajak data={sajak} />
    </>
  );
}
