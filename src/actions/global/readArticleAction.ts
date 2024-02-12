"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readArticleAction(category: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  const categoryId = await supabase
    .from("category")
    .select("id")
    .eq("category", category);
  return supabase
    .from("article")
    .select("title,image,slug,id, category(category)")
    .eq("category_id", categoryId.data![0].id)
    .eq("status", true);
}
