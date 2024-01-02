import ArticleForm from "@/components/admin/article/CRUD/ArticleForm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowLeftBold } from "react-icons/pi";

export default function Crud({
  params: { crud },
}: {
  params: { crud: string };
}) {
  if (crud.includes("buat-article") || crud.includes("edit-article")) {
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
            {crud === "buat-berita"
              ? crud.replace("-", " ")
              : crud.replace("-", " ").slice(0, 12)}
          </h1>
          <p>
            Halaman{" "}
            {crud === "buat-berita"
              ? crud.replace("-", " ")
              : crud.replace("-", " ").slice(0, 12)}
            .
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">
            Form{" "}
            {crud === "buat-berita"
              ? crud.replace("-", " ")
              : crud.replace("-", " ").slice(0, 12)}
            :
          </p>
          <ArticleForm crud={crud} />
        </div>
      </div>
    );
  } else {
    return notFound();
  }
}
