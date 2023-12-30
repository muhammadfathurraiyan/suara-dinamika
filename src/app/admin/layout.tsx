import Sidebar from "@/components/admin/global/Sidebar";
import { readUserSession } from "@/libs/action";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "../loading";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await readUserSession();
  if (!data.session) {
    return redirect("/");
  }
  return (
    <section className="fixed inset-x-0 bottom-0 top-[1.62rem] flex">
      <Sidebar />
      <div
        id="admin-layout"
        className="absolute right-0 inset-y-0 w-4/5 overflow-auto"
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </section>
  );
}
