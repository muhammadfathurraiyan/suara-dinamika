import { createSupabaseServerClient } from "@/libs/supabase";
import { redirect } from "next/navigation";
import { PiSignOut } from "react-icons/pi";

export default function Logout() {
  const signOut = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect("/");
  };
  return (
    <form action={signOut}>
      <button
        className={`flex items-center gap-2 p-2 text-neutral-400 hover:text-neutral-100 rounded-md`}
      >
        <PiSignOut size={20} /> Logout
      </button>
    </form>
  );
}
