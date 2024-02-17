import readArticleAction from "@/actions/global/readArticleAction";
import readCategoryAction from "@/actions/global/readCategoryAction";
import ListCategory from "@/components/global/ListCategory";
import MainCategory from "@/components/category/MainCategory";
import Popular from "@/components/global/Popular";
import Recomendation from "@/components/global/Recomendation";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 0;

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
    description: `Halaman kategori ${params.category}, temukan berita pilihan anda.`,
  };
}

export default async function Category({ params: { category } }: Props) {
  const { data: parameter } = await readCategoryAction();
  const { data } = await readArticleAction(category);
  const mainCategories = data?.slice(-3);
  const listCategories = data?.slice(0, -3);
  if (parameter?.some((i) => i.category.includes(category))) {
    return (
      <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
        <div className="max-md:mt-40">
          <h1 className="font-semibold text-xl p-2 bg-neutral-900 text-neutral-100 w-fit uppercase">
            {category}
          </h1>
          <div className="h-1 w-full bg-neutral-900" />
        </div>
        <MainCategory data={mainCategories} />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
          <ListCategory data={listCategories} />
          <Recomendation />
        </div>
        <Popular />
      </section>
    );
  } else {
    return notFound();
  }
}
