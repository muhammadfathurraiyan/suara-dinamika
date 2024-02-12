"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { unstable_noStore as noStore } from "next/cache";

export default async function readLatesArticleAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("article")
    .select("id,slug,title,image, category(category)")
    .eq("status", true)
    .order("created_at")
    .limit(6);
}
