import Link from "next/link";
import { PiEye, PiPencilLine } from "react-icons/pi";
import DeleteButton from "../global/DeleteButton";
import readUserProfileAction from "@/actions/global/readUserProfileAction";
import readAllArticleAction from "@/actions/article/readAllArticleAction";
import timeAgoOrDate from "@/libs/action/timeAgoOrDate";

export default async function AllArticleTable() {
  const { data: articles } = await readAllArticleAction();
  const CreatedBy = async ({ id }: { id: string }) => {
    const { data: editor } = await readUserProfileAction(id);
    return (
      <td className="p-2 text-center border-x border-neutral-900">
        {editor![0].user?.name}
      </td>
    );
  };
  return (
    <table className="w-full text-sm border border-neutral-900 shadow-md">
      <thead className="uppercase text-center bg-neutral-900 text-neutral-100">
        <tr>
          <th className="p-2">No</th>
          <th className="p-2">Judul</th>
          <th className="p-2">Rilis</th>
          <th className="p-2">Editor</th>
          <th className="p-2">Category</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {articles?.map((article, index) => (
          <tr key={article.id} className="border-b border-neutral-900">
            <td className="p-2 text-center">{++index}</td>
            <td className="p-2 text-center border-x border-neutral-900 truncate max-w-xs">
              {article.title}
            </td>
            <td className="p-2 text-center">
              {timeAgoOrDate(new Date(article.created_at))}
            </td>
            <CreatedBy id={article.created_by} />
            <td className="p-2 text-center border-r border-neutral-900">
              {article.category?.category}
            </td>
            <td className="p-2 text-center flex items-center justify-center gap-2">
              <Link
                href={`/${article.category?.category}/${article.slug}`}
                aria-label="Read"
                className="hover:text-blue-500"
              >
                <PiEye size={20} />
              </Link>
              <Link
                href={`/admin/all-article/edit-article ${article.id}`}
                aria-label="Update"
                className="hover:text-green-600"
              >
                <PiPencilLine size={20} />
              </Link>
              <DeleteButton text="articles" id={article.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
