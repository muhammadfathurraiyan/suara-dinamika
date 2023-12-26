"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readUserProfileAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase.from("permission").select("role, user(name, image)");
}
