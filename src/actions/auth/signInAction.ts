"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { SignInSchema } from "@/libs/types/zodtypes";
import { redirect } from "next/navigation";

export default async function signInAction(data: unknown) {
  const supabase = await createSupabaseServerClient();

  const result = SignInSchema.safeParse(data);

  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message;
    });
    return { error: errorMessage };
  }

  const validResult = await supabase.auth.signInWithPassword({
    email: result.data.email,
    password: result.data.password,
  });

  if (validResult.error?.message) {
    return { error: validResult.error.message };
  }

  return redirect("/admin");
}
