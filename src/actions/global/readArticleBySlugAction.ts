"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";
import { notFound } from "next/navigation";

export default async function readArticleBySlugAction(slug: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  if (!slug) {
    return notFound();
  }
  return supabase
    .from("article")
    .select("*, category(*)")
    .eq("slug", slug)
    .eq("status", true);
}
