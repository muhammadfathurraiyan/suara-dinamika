"use client";
import readUserProfileAction from "@/actions/global/readUserProfileAction";
import createUserAction from "@/actions/user/createUserAction";
import { CreateUserSchema } from "@/libs/types/zodtypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImageInput from "./ImageInput";

export default function CreateUserForm() {
  const [error, setError] = useState("");

  const clientCreateUserAction = async (data: FormData) => {
    // construct new signin
    const newUser = {
      email: data.get("email") as string,
      password: data.get("password") as string,
      name: data.get("name") as string,
      role: data.get("role") as string,
      image: data.get("image") as string,
    };

    // clientside validate
    const result = CreateUserSchema.safeParse(newUser);
    if (!result.success) {
      console.log(result.error);
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.message;
      });
      setError(errorMessage);
      return;
    } else {
      setError("");
    }

    const createUserResult = await createUserAction(result.data);
    if (createUserResult?.error) {
      setError(createUserResult.error);
    }
  };

  return (
    <form className="flex flex-col gap-7 w-1/3" action={clientCreateUserAction}>
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="text"
        placeholder="Nama"
        name="name"
      />
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        type="password"
        placeholder="Password"
        name="password"
      />
      <select
        name="role"
        className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
      >
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <ImageInput src={""} />
      <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
        Tambah
      </button>
    </form>
  );
}
