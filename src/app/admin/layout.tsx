import Sidebar from "@/components/global/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen relative flex">
      <Sidebar />
      <div className="absolute right-0 inset-y-0 w-4/5">{children}</div>
    </section>
  );
}
