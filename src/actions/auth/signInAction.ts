"use server"
import { createSupabaseServerClient } from "@/libs/supabaseServerClient";
import { SignInSchema } from "@/libs/zodtypes";
import { redirect } from "next/navigation";

export default async function signInAction(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}
