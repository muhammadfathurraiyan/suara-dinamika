import CreateArticleForm from "./CreateArticleForm";
import EditArticleForm from "./EditArticleForm";

export default function ArticleForm({
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
  if (crud === "buat-article") {
    return <CreateArticleForm categories={categories} />;
  } else {
    return <EditArticleForm categories={categories} crud={crud} />;
  }
}
