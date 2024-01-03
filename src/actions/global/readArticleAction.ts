"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readArticleAction(category: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("category")
    .select("category, article(*)")
    .eq("category", category);
}
