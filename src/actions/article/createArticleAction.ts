"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { CreateArticleSchema } from "@/libs/types/zodtypes";
import { redirect } from "next/navigation";

export default async function createArticleAction(data: unknown) {
  const supabase = await createSupabaseServerClient();
  const result = CreateArticleSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error);
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message;
    });
    return { error: errorMessage };
  }

  const validResult = await supabase.from("article").insert({
    title: result.data.title,
    slug: result.data.slug,
    body: result.data.body,
    image: result.data.image,
    status: result.data.status,
    category_id: result.data.category,
  });

  if (validResult.error?.message) {
    return { error: validResult.error?.message };
  }

  return redirect("/admin/article");
}
