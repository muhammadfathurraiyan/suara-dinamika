"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { unstable_noStore as noStore } from "next/cache";

export async function searchArticleAction(text: string) {
  const supabase = await createSupabaseServerClient();
  noStore();
  const result = await supabase
    .from("article")
    .select("id,slug,title,image, category(category)")
    .textSearch("title", text)
    .eq("status", true)
    .order("created_at");
  return result;
}
