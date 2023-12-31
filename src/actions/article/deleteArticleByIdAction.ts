"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { revalidatePath } from "next/cache";

export default async function deleteArticleByIdAction(id: string) {
  console.log(id);
  const supabase = await createSupabaseServerClient();
  const result = await supabase.from("article").delete().eq("id", id);
  revalidatePath("/admin/article");
  if (result.error?.message) {
    return { error: result.error.message };
  }
}
