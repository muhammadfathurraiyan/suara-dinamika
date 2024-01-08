import AllArticleTable from "@/components/admin/all-article/AllArticleTable";
import { readUserSession } from "@/libs/action";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PiEye, PiPen, PiTrash } from "react-icons/pi";

export default async function AllArticle() {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return redirect("/admin");
  }
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Semua Article</h1>
        <p>Halaman total seluruh article.</p>
      </div>
      <div className="relative overflow-x-auto">
        <AllArticleTable />
      </div>
    </div>
  );
}
