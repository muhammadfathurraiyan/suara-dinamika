"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readAllSlugAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase.from("article").select("slug").eq("status", true);
}
