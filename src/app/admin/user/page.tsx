import { readUserSession } from "@/libs/action";
import { redirect } from "next/navigation";
import Link from "next/link";
import UserTable from "@/components/admin/user/UserTable";

export default async function User() {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return redirect("/admin");
  }
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Manage User</h1>
        <p>Halaman management user.</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50"
          href="/admin/user/tambah-user"
        >
          Tambah
        </Link>
        <UserTable />
      </div>
    </div>
  );
}
