import readArticleByIdAction from "@/actions/article/readArticleByIdAction";
import Link from "next/link";

export default async function Kontribusi({ id }: { id: string | undefined }) {
  const { data: articles } = await readArticleByIdAction(id!);
  if (!articles) {
    return (
      <div className="w-1/5 h-full flex flex-col gap-4 rounded p-2 border border-neutral-900/30 shadow-md">
        <div>
          <h2 className="text-xl font-bold">Kontribusi</h2>
          <p>Kontribusi saya</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-1/5 h-full flex flex-col gap-4 rounded p-2 border border-neutral-900/30 shadow-md">
      <div>
        <h2 className="text-xl font-bold">Kontribusi</h2>
        <p>Kontribusi saya</p>
      </div>
      <p className="text-6xl font-bold text-center">{articles.length}</p>
      <div>
        <p>Article terbaru saya:</p>
        <ul className="list-inside list-decimal">
          {articles.slice(0, 5).map((article) => (
            <li key={article.id} className="truncate max-w-fit">
              {article.title}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/admin/article" className="text-center underline font-medium">
        Lihat semua...
      </Link>
    </div>
  );
}
