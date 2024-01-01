import readArticleByIdAction from "@/actions/article/readArticleByIdAction";
import ArticleTable from "@/components/admin/article/CRUD/ArticleTable";
import { readUserSession } from "@/libs/action";
import Link from "next/link";
import { PiEye, PiPencilLine, PiTrash } from "react-icons/pi";

export default async function Article() {
  const { data: userSession } = await readUserSession();
  const id = userSession.session?.user.id;
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Article</h1>
        <p>Halaman untuk melakukan CRUD article.</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50"
          href="/admin/article/buat-article"
        >
          Buat
        </Link>
        <div className="relative overflow-x-auto">
          <ArticleTable id={id} />
        </div>
      </div>
    </div>
  );
}
