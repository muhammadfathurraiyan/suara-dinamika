import readUserProfileAction from "@/actions/global/readUserProfileAction";
import React, { useState } from "react";
import ImageInput from "./ImageInput";

export default async function EditUserForm({ crudUser }: { crudUser: string }) {
  let error = "";
  const id = crudUser.slice(13);
  // const { data } = await readUserProfileAction(id);
  console.log(id)
  // const profile = data![0];
  // const clientEditUserAction = async () => {};
  return (
    <form className="flex flex-col gap-7 w-1/3" action={"clientEditUserAction"}>
      {error !== "" && <p className="text-red-500">{error}</p>}
      {/* <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="text"
        placeholder="Nama"
        name="name"
        value={profile.user?.name}
      />
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="text"
        placeholder="Email"
        name="email"
        value={profile.user?.email}
      />
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="password"
        placeholder="Password"
        name="password"
        // value={password}
      />
      <select
        name="role"
        value={profile.role}
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
      >
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <ImageInput src={profile.user?.image!} /> */}
      <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
        Tambah
      </button>
    </form>
  );
}
