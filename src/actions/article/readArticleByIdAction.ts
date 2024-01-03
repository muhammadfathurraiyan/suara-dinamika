"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readArticleByIdAction(id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const article = supabase
    .from("article")
    .select("*, category(*)")
    .eq("created_by", id);
  return article;
}
