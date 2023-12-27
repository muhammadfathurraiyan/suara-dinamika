"use client";
import readUserProfileAction from "@/actions/global/readUserProfileAction";
import createUserAction from "@/actions/user/createUserAction";
import { CreateUserSchema } from "@/libs/types/zodtypes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserForm({ crudUser }: { crudUser: string }) {
  const [error, setError] = useState("");
  const [base64, setBase64] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleImageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // 'e.target.result' contains the Base64 string representation of the image
        if (typeof e.target?.result === "string") {
          setBase64(e.target.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

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

  const clientEditUserAction = async (data: FormData) => {
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

  const id = crudUser.slice(13);
  const getData = async () => {
    const { data } = await readUserProfileAction(id);
    const profile = data![0];
    setBase64(profile.user?.image!);
    setName(profile.user?.name!);
    setEmail(profile.user?.email!);
    setRole(profile.role);
    setPassword();
  };

  if (crudUser !== "tambah-user") {
    useEffect(() => {}, []);
  }

  if (crudUser === "tambah-user") {
    return (
      <form
        className="flex flex-col gap-7 w-1/3"
        action={clientCreateUserAction}
      >
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
        <div>
          {base64 !== "" && (
            <Image
              className="w-full"
              width={0}
              height={0}
              src={base64}
              alt="profile pic"
            />
          )}
          <label className="font-semibold" htmlFor="image">
            Foto
          </label>
          <input type="hidden" value={base64} name="image" />
          <input
            className="bg-transparent text-sm focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-neutral-900/50"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageInputChange(e)}
          />
        </div>
        <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          Tambah
        </button>
      </form>
    );
  } else {
    return (
      <form className="flex flex-col gap-7 w-1/3" action={clientEditUserAction}>
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Nama"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
        />
        <select
          name="role"
          value={role}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setRole(e.target.value)
          }
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
        >
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
        <div>
          {base64 !== "" && (
            <Image
              className="w-full"
              width={0}
              height={0}
              src={base64}
              alt="profile pic"
            />
          )}
          <label className="font-semibold" htmlFor="image">
            Foto
          </label>
          <input type="hidden" value={base64} name="image" />
          <input
            className="bg-transparent text-sm focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-neutral-900/50"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageInputChange(e)}
          />
        </div>
        <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          Tambah
        </button>
      </form>
    );
  }
}
