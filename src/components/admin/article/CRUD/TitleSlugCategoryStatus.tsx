"use client";
import { ChangeEvent, useState } from "react";

export default function TitleSlugCategoryStatus({
  title,
  slug,
  categories,
  category,
  status,
}: {
  title: string;
  slug: string;
  category: string;
  categories:
    | {
        category: string;
        created_at: string;
        id: string;
      }[]
    | null;
  status: string;
}) {
  const [editSlug, setEditSlug] = useState(slug);
  const [editCategory, setEditCategory] = useState(category);
  const [editStatus, setEditStatus] = useState(status);

  const handleSlug = (e: ChangeEvent<HTMLInputElement>) => {
    let data = e.target.value;
    setEditSlug(
      data
        .replaceAll(" ", "-")
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll("?", "")
        .replaceAll("!", "")
        .replaceAll("/", "")
        .toLowerCase()
    );
  };

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    let data = e.target.value;
    setEditCategory(data);
  };

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    let data = e.target.value;
    setEditStatus(data);
  };

  return (
    <>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Judul</label>
        <input
          className="bg-transparent w-1/2 focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50"
          type="text"
          name="title"
          id="title"
          placeholder="Judul"
          defaultValue={title}
          onChange={(e) => handleSlug(e)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Slug</label>
        <input
          className="bg-transparent lowercase cursor-not-allowed w-1/2 focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50"
          type="text"
          id="slugs"
          name="slug"
          readOnly
          value={editSlug}
          placeholder="Slug"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Kategori</label>
        <select
          required
          name="category"
          id="select"
          value={editCategory}
          onChange={(e) => handleCategory(e)}
          className={`bg-transparent w-1/2 focus:outline-none capitalize p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50`}
        >
          {categories?.map((category) => (
            <option
              key={category.id}
              className="text-neutral-900 capitalize"
              value={category.id}
            >
              {category.category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Status</label>
        <select
          required
          name="status"
          id="select"
          value={editStatus}
          onChange={(e) => handleStatus(e)}
          className={`bg-transparent w-1/2 focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50`}
        >
          <option className="text-neutral-900" value="public">
            Public
          </option>
          <option className="text-neutral-900" value="private">
            Private
          </option>
        </select>
      </div>
    </>
  );
}
