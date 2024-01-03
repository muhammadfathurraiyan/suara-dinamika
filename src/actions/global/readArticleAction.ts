"use server";

import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readArticleAction(category: string) {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("category")
    .select("category, article(*)")
    .eq("category", category);
}
