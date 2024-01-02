import CreateArticleForm from "./CreateArticleForm";
import EditArticleForm from "./EditArticleForm";

export default function ArticleForm({ crud }: { crud: string }) {
  if (crud === "buat-article") {
    return <CreateArticleForm />;
  } else {
    return <EditArticleForm crud={crud} />;
  }
}
