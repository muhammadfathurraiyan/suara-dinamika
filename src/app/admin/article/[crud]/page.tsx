import CreateArticleForm from "@/components/admin/article/CRUD/CreateArticleForm";
import Link from "next/link";
import { PiArrowLeftBold } from "react-icons/pi";

export default function Crud({ params }: { params: { crud: string } }) {
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
          {params.crud.replace("-", " ")}
        </h1>
        <p>Halaman {params.crud.replace("-", " ")}.</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">
          Form {params.crud.replace("-", " ")}:
        </p>
        <CreateArticleForm />
      </div>
    </div>
  );
}
