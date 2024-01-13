import EditPassword from "@/components/admin/account/EditPassword";
import EditProfile from "@/components/admin/account/EditProfile";
import ProfileCard from "@/components/admin/account/ProfileCard";

export default async function Account() {
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Account</h1>
        <p>Halaman untuk melakukan setting account.</p>
      </div>
      <div className="flex flex-col gap-12">
        <ProfileCard />
        <EditProfile />
        <EditPassword />
      </div>
    </div>
  );
}
