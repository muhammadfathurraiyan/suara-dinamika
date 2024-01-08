"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { revalidatePath } from "next/cache";

export default async function deleteAllArticleByIdAction(id: string) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("article").delete().eq("id", id);
  revalidatePath("/admin/all-article");
  if (result.error?.message) {
    return { error: result.error.message };
  }
}
