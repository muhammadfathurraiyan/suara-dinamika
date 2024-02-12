"use server";
import { createSupabaseServerClient } from "@/libs/supabase";
import { unstable_noStore as noStore } from "next/cache";

export async function readLatesArticleAction() {
  const supabase = await createSupabaseServerClient();
  noStore();
  return supabase
    .from("article")
    .select("id,slug,title,image, category(category)")
    .eq("status", true)
    .order("created_at")
    .limit(6);
}

export async function readLatesArticleOpiniAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("article")
    .select("id,slug,title,image,created_at, category(category)")
    .eq("category_id", "ac0e383f-14ee-489f-b581-9952e3375db8")
    .eq("status", true)
    .order("created_at", { ascending: false })
    .limit(3);
}

export async function readLatesArticleLingkunganAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("article")
    .select("id,slug,title,image, category(category)")
    .eq("category_id", "5696df37-3f32-4a5b-8eb2-1e479c78697a")
    .eq("status", true)
    .order("created_at", { ascending: false })
    .limit(3);
}

export async function readLatesArticleTeknologiAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("article")
    .select("id,slug,title,image,created_at, category(category)")
    .eq("category_id", "156d8ff0-5e60-47b9-8a1e-54091ce101f8")
    .eq("status", true)
    .order("created_at", { ascending: false })
    .limit(3);
}

export async function readLatesArticleSejarahAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("article")
    .select("id,slug,title,image, category(category)")
    .eq("category_id", "b9983e2c-f1f5-4d27-b858-2e2ee9091fd2")
    .eq("status", true)
    .order("created_at", { ascending: false })
    .limit(3);
}

export async function readLatesArticleSajakAction() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("article")
    .select("id,slug,title,image,created_at, category(category)")
    .eq("category_id", "bf0badb2-3705-402b-8baa-6411b157d679")
    .eq("status", true)
    .order("created_at", { ascending: false })
    .limit(3);
}