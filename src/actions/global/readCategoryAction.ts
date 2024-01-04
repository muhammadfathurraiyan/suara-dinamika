"use server";
import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "@/libs/supabase";

export default async function readCategoryAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase.from("category").select("*");
}
