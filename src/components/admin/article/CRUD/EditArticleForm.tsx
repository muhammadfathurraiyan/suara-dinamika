import Editor from "../editor/Editor";
import ImageInput from "../../global/ImageInput";
import { notFound } from "next/navigation";
import readArticleForEditAction from "@/actions/article/readArticleForEditAction";
import TitleSlugCategoryStatus from "./TitleSlugCategoryStatus";
import { CreateArticleSchema } from "@/libs/types/zodtypes";
import editArticleAction from "@/actions/article/editArticleAction";

export default async function EditArticleForm({
  crud,
  categories,
}: {
  crud: string;
  categories:
    | {
        category: string;
        created_at: string;
        id: string;
      }[]
    | null;
}) {
  const id = crud.slice(15);

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
  };

  return (
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
  );
}
