"use server";
import { readUserSession } from "@/libs/action";
import { createSupabaseAdmin } from "@/libs/supabase";
import { CreateUserSchema } from "@/libs/types/zodtypes";
import { redirect } from "next/navigation";

export default async function createUserAction(data: unknown) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return { error: "kamu bukan admin" };
  }

  const supabase = await createSupabaseAdmin();
  const result = CreateUserSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error);
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message;
    });
    return { error: errorMessage };
  }

  // create admin account
  const validResult = await supabase.auth.admin.createUser({
    email: result.data.email,
    password: result.data.password,
    email_confirm: true,
    user_metadata: {
      role: result.data.role,
    },
  });

  if (validResult.error?.message) {
    return { error: validResult.error.message };
  } else {
    // insert user table
    const userResult = await supabase.from("user").insert({
      email: result.data.email,
      name: result.data.name,
      image: result.data.image,
      id: validResult.data.user?.id!,
    });

    if (userResult.error?.message) {
      return { error: userResult.error.message };
    } else {
      // insert permission table
      const permisionResult = await supabase.from("permission").insert({
        role: result.data.role,
        user_id: validResult.data.user?.id!,
      });
      if (permisionResult.error?.message) {
        return { error: permisionResult.error.message };
      }
    }
  }

  return redirect("/admin/user");
}
