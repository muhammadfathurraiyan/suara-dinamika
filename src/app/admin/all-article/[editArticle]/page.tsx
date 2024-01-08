import editArticleAction from "@/actions/article/editArticleAction";
import readArticleForEditAction from "@/actions/article/readArticleForEditAction";
import readCategoryAction from "@/actions/global/readCategoryAction";
import TitleSlugCategoryStatus from "@/components/admin/article/CRUD/TitleSlugCategoryStatus";
import Editor from "@/components/admin/article/editor/Editor";
import ImageInput from "@/components/admin/global/ImageInput";
import { CreateArticleSchema } from "@/libs/types/zodtypes";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { PiArrowLeftBold } from "react-icons/pi";

export default async function Edit({
  params: { editArticle },
}: {
  params: { editArticle: string };
}) {
  const { data: categories } = await readCategoryAction();

  const id = editArticle.slice(15);

  const { data } = await readArticleForEditAction(id);
  if (!data) {
    return notFound();
  }
  const article = data![0];
  let error = "";

  const clientEditArticleAction = async (data: FormData) => {
    "use server";
    const newArticle = {
      title: data.get("title") as string,
      slug: data.get("slug") as string,
      body: data.get("body") as string,
      status: data.get("status") === "public" ? true : false,
      image: data.get("image") as string,
      category: data.get("category") as string,
    };

    // clientside validate
    const result = CreateArticleSchema.safeParse(newArticle);
    if (!result.success) {
      console.log(result.error);
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage = issue.path + " " + errorMessage + issue.message;
      });
      error = errorMessage;
      return;
    }

    const createArticleResult = await editArticleAction(result.data, id);
    if (createArticleResult?.error) {
      error = createArticleResult.error;
    }

    return redirect("/admin/all-article");
  };

  if (editArticle.includes("edit-article")) {
    return (
      <div className="relative px-4 py-12 flex flex-col gap-12">
        <Link
          href="/admin/article"
          className="absolute top-3 hover:text-neutral-900/90 duration-300 flex items-center gap-1 font-bold"
          aria-label="Arrow Right"
        >
          <PiArrowLeftBold /> Kembali
        </Link>
        <div>
          <h1 className="text-3xl font-black uppercase">
            {editArticle.replace("-", " ").slice(0, 12)}
          </h1>
          <p>Halaman {editArticle.replace("-", " ").slice(0, 12)}.</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">
            Form {editArticle.replace("-", " ").slice(0, 12)}:
          </p>
          <form
            className="flex flex-col gap-4 w-full"
            action={clientEditArticleAction}
          >
            {error && <p className="text-red-500">{error}</p>}
            <TitleSlugCategoryStatus
              category={article.category_id}
              categories={categories}
              title={article.title}
              slug={article.slug}
              status={article.status === true ? "public" : "private"}
            />
            <div className="w-1/2">
              <ImageInput src={article.image} />
            </div>
            <Editor body={article.body} from="edit" />
            <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
              Edit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return notFound();
  }
}
