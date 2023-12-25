"use server"
import { createSupabaseServerClient } from "@/libs/supabaseServerClient";

export default async function signUpAction(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}
