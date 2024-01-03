"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { unstable_noStore as noStore } from "next/cache";

export default async function readArticleForEditAction(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase.from("article").select("*, category(*)").eq("id", id);
}
