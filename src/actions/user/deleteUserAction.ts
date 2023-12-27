"use server";
import { readUserSession } from "@/libs/action";
import {
  createSupabaseAdmin,
  createSupabaseServerClient,
} from "@/libs/supabase";
import { revalidatePath } from "next/cache";

export default async function deleteUserAction(id: string) {
  const { data: userSession } = await readUserSession();
  if (userSession.session?.user.user_metadata.role !== "admin") {
    return { error: "kamu bukan admin" };
  }

  const supabase = await createSupabaseAdmin();
  const result = await supabase.auth.admin.deleteUser(id);
  if (result.error?.message) {
    return { error: result.error.message };
  } else {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.from("user").delete().eq("id", id);
    revalidatePath("/admin/user")
    if (result.error?.message) {
      return { error: result.error.message };
    }
  }
}
