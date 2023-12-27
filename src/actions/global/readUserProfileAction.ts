"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readUserProfileAction(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase
    .from("permission")
    .select("*, user(*)")
    .eq("user_id", id);
}
