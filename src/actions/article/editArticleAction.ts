"use server";

import { createSupabaseServerClient } from "@/libs/supabase";
import { CreateArticleSchema } from "@/libs/types/zodtypes";
import { redirect } from "next/navigation";

export default async function editArticleAction(data: unknown, id: string) {
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

  // update account
  const validResult = await supabase
    .from("article")
    .update({
      title: result.data.title,
      slug: result.data.slug,
      image: result.data.image,
      body: result.data.body,
      status: result.data.status,
    })
    .eq("id", id)
    .select();

  if (validResult.error?.message) {
    return { error: validResult.error.message };
  } else {
    // insert permission table
    const categoryResult = await supabase
      .from("category")
      .update({
        category: result.data.category,
      })
      .eq("article_id", validResult.data?.[0].id!);

    if (categoryResult.error?.message) {
      return { error: categoryResult.error.message };
    }
  }

  return redirect("/admin/article");
}
