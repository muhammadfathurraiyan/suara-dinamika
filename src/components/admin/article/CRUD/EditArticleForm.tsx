"use client";
import { ChangeEvent, useState } from "react";
import Editor from "../editor/Editor";
import { CreateArticleSchema } from "@/libs/types/zodtypes";
import createArticleAction from "@/actions/article/createArticleAction";
import ImageInput from "../../global/ImageInput";

export default function EditArticleForm({crud}:{crud:string}) {
  // let error = "";
  const id = crud.slice(15);
  console.log(id)
  const [selectedOption, setSelectedOption] = useState("0");
  const [selectedStatus, setSelectedStatus] = useState("0");
  const [statusValue, setStatusValue] = useState(false);
  const [error, setError] = useState("");
  const [slug, setSlug] = useState("");

  const handleSlug = (e: ChangeEvent<HTMLInputElement>) => {
    let data = e.target.value;
    setSlug(data.replaceAll(" ", "-"));
  };

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    let data = e.target.value;
    setSelectedStatus(data);
    if (data === "1") {
      setStatusValue(true);
    }
  };

  const clientCreateArticleAction = async (data: FormData) => {
    const newClient = {
      title: data.get("title") as string,
      slug: data.get("slug") as string,
      body: data.get("body") as string,
      status: statusValue,
      image: data.get("image") as string,
      category: data.get("category") as string,
    };

    // clientside validate
    const result = CreateArticleSchema.safeParse(newClient);
    if (!result.success) {
      console.log(result.error);
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage = issue.path + " " + errorMessage + issue.message;
      });
      setError(errorMessage);
      return;
    } else {
      setError("");
    }

    const createArticleResult = await createArticleAction(result.data);
    if (createArticleResult?.error) {
      setError(createArticleResult.error);
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-full"
      action={clientCreateArticleAction}
    >
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Judul</label>
        <input
          className="bg-transparent w-1/2 focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50"
          type="text"
          name="title"
          id="title"
          placeholder="Judul"
          onChange={(e) => handleSlug(e)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Slug</label>
        <input
          className="bg-transparent cursor-not-allowed w-1/2 focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50"
          type="text"
          id="slugs"
          name="slug"
          readOnly
          value={slug}
          placeholder="Slug"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Kategori</label>
        <select
          required
          name="category"
          id="select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className={`bg-transparent w-1/2 ${
            selectedOption === "0" ? "text-neutral-900/40 font-semibold" : ""
          } focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50`}
        >
          <option value="0" disabled hidden>
            Pilih Kategori
          </option>
          <option className="text-neutral-900" value="1">
            Budaya
          </option>
          <option className="text-neutral-900" value="2">
            Teknologi
          </option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-sm">Status</label>
        <select
          required
          name="status"
          id="select"
          value={selectedStatus}
          onChange={(e) => handleStatus(e)}
          className={`bg-transparent w-1/2 ${
            selectedStatus === "0" ? "text-neutral-900/40 font-semibold" : ""
          } focus:outline-none p-2 border border-neutral-900/30 focus:border-2 focus:border-neutral-900/50`}
        >
          <option value="0" disabled hidden>
            Pilih Status
          </option>
          <option className="text-neutral-900" value="1">
            Public
          </option>
          <option className="text-neutral-900" value="2">
            Private
          </option>
        </select>
      </div>
      <div className="w-1/2">
        <ImageInput src="" />
      </div>
      <Editor />
      <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
        Tambah
      </button>
    </form>
  );
}
