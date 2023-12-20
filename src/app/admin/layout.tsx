import Sidebar from "@/components/global/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="fixed inset-x-0 bottom-0 top-[1.62rem] flex">
      <Sidebar />
      <div id="admin-layout" className="absolute right-0 inset-y-0 w-4/5 overflow-auto">
        {children}
      </div>
    </section>
  );
}
