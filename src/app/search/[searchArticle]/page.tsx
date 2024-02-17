import { searchArticleAction } from "@/actions/global/searchArticleAction";
import ListCategory from "@/components/global/ListCategory";
import Recomendation from "@/components/global/Recomendation";
import Link from "next/link";

type Props = {
  params: { searchArticle: string };
};
export default async function page({ params }: Props) {
  const title = params.searchArticle.replaceAll("%20", "&");
  const { data } = await searchArticleAction(title);
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
        {data?.length === 0 ? (
          <div className="md:col-span-2 flex flex-col gap-2 ">
            <h1 className="font-bold text-3xl uppercase">Tidak Ada Hasil</h1>
            <Link
              className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50"
              href="/"
            >
              Kembali
            </Link>
          </div>
        ) : (
          <ListCategory data={data} />
        )}
        <Recomendation />
      </div>
    </section>
  );
}
