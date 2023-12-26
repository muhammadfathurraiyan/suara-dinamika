"use server";
import { createSupabaseServerClient } from "../supabase";

export async function readUserSession() {
  const supabase = await createSupabaseServerClient();
  return supabase.auth.getSession();
}
