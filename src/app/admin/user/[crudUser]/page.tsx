import UserForm from "@/components/admin/user/UserForm";
import { readUserSession } from "@/libs/action";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { PiArrowLeftBold } from "react-icons/pi";

export default async function TambahUser({
  params: { crudUser },
}: {
  params: { crudUser: string };
}) {
  const { data: userSession } = await readUserSession();
  console.log(crudUser)
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return redirect("/admin");
  } else {
    if (crudUser === "tambah-user" || crudUser.includes("edit-user")) {
      return (
        <div className="relative px-4 py-12 flex flex-col gap-12">
          <Link
            href="/admin/user"
            className="absolute top-3 hover:text-neutral-900/90 duration-300 flex items-center gap-1 font-bold"
            aria-label="Arrow Right"
          >
            <PiArrowLeftBold /> Kembali
          </Link>
          <div>
            <h1 className="text-3xl font-black uppercase">
              {crudUser.replace("-", " ")}
            </h1>
            <p>Halaman {crudUser.replace("-", " ")}.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">
              Form {crudUser.replace("-", " ")}:
            </p>
            <UserForm crudUser={crudUser} />
          </div>
        </div>
      );
    } else {
      return notFound();
    }
  }
}
