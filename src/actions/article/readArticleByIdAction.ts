"use server";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readArticleByIdAction(id: string) {
  const supabase = await createSupabaseServerClient();
  const article = supabase.from("article").select("*, category(*)").eq("created_by", id);
  return article;
}
