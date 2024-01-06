import readUserProfileAction from "@/actions/global/readUserProfileAction";
import Kontribusi from "@/components/admin/Kontribusi";
import Calendar from "@/components/admin/insight/Calendar";
import { readUserSession } from "@/libs/action";
import Link from "next/link";

export default async function Beranda() {
  const { data: userSession } = await readUserSession();
  const { data } = await readUserProfileAction(userSession.session?.user.id!);
  const profile = data![0];
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Beranda</h1>
        <p>Halaman beranda.</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="px-2 py-8 border border-neutral-900/30 shadow-md rounded">
          <p className="text-xl">
            Hallo <b>{profile.user?.name}</b> 👋
          </p>
          <p className="text-xl">
            selamat datang silahkan pilih menu tertentu untuk melanjutkan.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-4 w-4/5 p-2 rounded border border-neutral-900/30 shadow-md">
            <div>
              <h2 className="text-xl font-bold">Kontribusi</h2>
              <p>Jumlah kontribusi tahun ini</p>
            </div>
            <Calendar />
          </div>
          <Kontribusi id={profile.user?.id} />
        </div>
      </div>
    </div>
  );
}
