"use server";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readArticleForEditAction(id: string) {
  const supabase = await createSupabaseServerClient();
  return supabase.from("article").select("*, category(*)").eq("id", id);
}
