"use server";
import { readUserSession } from "@/libs/action";
import { createSupabaseAdmin } from "@/libs/supabase";
import { EditUserSchema } from "@/libs/types/zodtypes";
import { redirect } from "next/navigation";

export default async function editUserAction(
  id: string,
  data: unknown,
  updatePassword: string
) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return { error: "kamu bukan admin" };
  }

  const supabase = await createSupabaseAdmin();
  const result = EditUserSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error);
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message;
    });
    return { error: errorMessage };
  }

  let updateAdmin: any = { email: result.data.email };

  if (updatePassword) {
    updateAdmin["password"] = updatePassword;
  }

  // update account
  const validResult = await supabase
    .from("user")
    .update({
      email: result.data.email,
      name: result.data.name,
      image: result.data.image,
    })
    .eq("id", id);

  if (validResult.error?.message) {
    return { error: validResult.error.message };
  } else {
    // insert permission table
    const permisionResult = await supabase
      .from("permission")
      .update({
        role: result.data.role,
      })
      .eq("user_id", id);

    if (permisionResult.error?.message) {
      return { error: permisionResult.error.message };
    } else {
      const accountResult = await supabase.auth.admin.updateUserById(
        id,
        updateAdmin
      );

      if (accountResult.error?.message) {
        return { error: accountResult.error.message };
      }
    }
  }

  return redirect("/admin/user");
}
