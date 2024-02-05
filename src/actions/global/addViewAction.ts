"use server";

import { createSupabaseServerClient } from "@/libs/supabase";

export default async function addViewAction(id: string) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.from("article").select().eq("id", id);
  
  const validResult = await supabase
    .from("article")
    .update({ view: result.data?.[0].view! + 1 })
    .eq("id", id);
}
