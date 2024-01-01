import readArticleByIdAction from "@/actions/article/readArticleByIdAction";
import Link from "next/link";
import React from "react";
import { PiEye, PiPencilLine, PiTrash } from "react-icons/pi";
import DeleteButton from "../../global/DeleteButton";

export default async function ArticleTable({ id }: { id: string | undefined }) {
  const { data: articles } = await readArticleByIdAction(id!);
  return (
    <table className="w-full text-sm border border-neutral-900 shadow-md">
      <thead className="uppercase text-center bg-neutral-900 text-neutral-100">
        <tr>
          <th className="p-2">No</th>
          <th className="p-2">Judul</th>
          <th className="p-2">Rilis</th>
          <th className="p-2">Category</th>
          <th className="p-2">Status</th>
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
            <td className="p-2 text-center">{article.created_at}</td>
            <td className="p-2 text-center border-x border-neutral-900">
              {article.category[0].category}
            </td>
            <td className="p-2 text-center">{article.status}</td>
            <td className="p-2 border-l border-neutral-900 text-center flex items-center justify-center gap-2">
              <Link href="/" aria-label="Read" className="hover:text-blue-500">
                <PiEye size={20} />
              </Link>
              <Link
                href={`/admin/article/edit-article ${article.id}`}
                aria-label="Update"
                className="hover:text-green-600"
              >
                <PiPencilLine size={20} />
              </Link>
              <DeleteButton id={article.id} text="article" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
