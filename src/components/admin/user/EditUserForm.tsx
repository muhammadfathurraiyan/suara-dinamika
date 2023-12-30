import readUserProfileAction from "@/actions/global/readUserProfileAction";
import React, { useState } from "react";
import ImageInput from "../global/ImageInput";
import { CreateUserSchema, EditUserSchema } from "@/libs/types/zodtypes";
import editUserAction from "@/actions/user/editUserAction";
import { notFound } from "next/navigation";

export default async function EditUserForm({ crudUser }: { crudUser: string }) {
  let error = "";
  const id = crudUser.slice(17);
  const { data } = await readUserProfileAction(id);
  if (!data) {
    return notFound();
  }
  const profile = data![0];

  const clientEditUserAction = async (data: FormData) => {
    "use server";
    // construct new signin
    const newEditUser = {
      email: data.get("email") as string,
      password: data.get("password") as string,
      name: data.get("name") as string,
      role: data.get("role") as string,
      image: data.get("image") as string,
    };

    // clientside validate
    const result = EditUserSchema.safeParse(newEditUser);
    if (!result.success) {
      console.log(result.error);
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.message;
      });
      // error = errorMessage;
      console.log(errorMessage);
      return;
    }

    const createUserResult = await editUserAction(id, result.data);
    if (createUserResult?.error) {
      error = createUserResult.error;
    }
  };
  return (
    <form className="flex flex-col gap-7 w-1/3" action={clientEditUserAction}>
      {error !== "" && <p className="text-red-500">{error}</p>}
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="text"
        placeholder="Nama"
        name="name"
        defaultValue={profile.user?.name}
      />
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="text"
        placeholder="Email"
        name="email"
        defaultValue={profile.user?.email}
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
        defaultValue={profile.role}
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
      >
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <ImageInput src={profile.user?.image!} />
      <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
        Edit
      </button>
    </form>
  );
}
