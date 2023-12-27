import { readUserSession } from "@/libs/action";
import Logout from "./Logout";
import Navigation from "./Navigation";
import Image from "next/image";
import readUserProfileAction from "@/actions/global/readUserProfileAction";

export default async function Sidebar() {
  const { data: userSession } = await readUserSession();
  let hidden = "";
  if (userSession.session?.user.user_metadata.role !== "admin") {
    hidden = "hidden";
  }
  const { data } = await readUserProfileAction(userSession.session?.user.id!);
  const profile = data![0];
  return (
    <aside className="absolute left-0 inset-y-0 w-1/5 bg-neutral-900 text-neutral-100 px-4 py-12 flex flex-col gap-12">
      <div className="flex items-center gap-2">
        <>
          <Image
            className="w-12 rounded-full"
            src={profile.user?.image!}
            alt="profile pic"
            width={1}
            height={1}
          />
          <div>
            <p className="font-semibold uppercase">{profile.user?.name}</p>
            <p className="text-xs -mt-1 uppercase">{profile.role}</p>
          </div>
        </>
      </div>
      <Navigation hidden={hidden} />
      <Logout />
    </aside>
  );
}
