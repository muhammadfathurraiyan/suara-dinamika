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

  console.log(result);

  const validResult = await supabase
    .from("article")
    .insert({
      title: result.data.title,
      slug: result.data.slug,
      body: result.data.body,
      image: result.data.image,
      status: result.data.status,
    })
    .select();

  if (validResult.error?.message) {
    return { error: validResult.error?.message };
  } else {
    console.log(validResult.data?.[0].id!);
    const categoryResult = await supabase.from("category").insert({
      category: result.data.category,
      article_id: validResult.data?.[0].id!,
    });
    if (categoryResult.error?.message) {
      return { error: categoryResult.error.message };
    }
  }

  return redirect("/admin/article");
}
