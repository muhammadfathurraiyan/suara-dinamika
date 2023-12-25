// "use client";
import signInAction from "@/actions/auth/signInAction";
import { SignInSchema } from "@/libs/zodtypes";
import { redirect } from "next/navigation";
// import { useState } from "react";
// import { useFormStatus } from "react-dom";

export default function Login() {
  // const [error, setError] = useState("");
  // const { pending } = useFormStatus();

  const clientSignInAction = async (data: FormData) => {
    // construct new signin
    "use server";
    const newSignIn = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    };

    // clientside validate
    // const result = SignInSchema.safeParse(newSignIn);
    // if (!result.success) {
    //   let errorMessage = "";
    //   result.error.issues.forEach((issue) => {
    //     errorMessage = errorMessage + issue.message;
    //   });
    //   // setError(errorMessage);
    //   return;
    // } else {
    //   // reset form
    //   // setError("");
    // }

    const signIndData = await signInAction(newSignIn);
    const { error } = JSON.parse(signIndData);
    if (error) {
      return <p>error masbro</p>;
    }
  };
  return (
    <div className="p-4 border flex flex-col gap-12 border-neutral-950/30 md:w-1/3 shadow-md">
      <div>
        <h2 className="font-black text-3xl uppercase">Login Form</h2>
        <p>Silahkan login untuk menulis article.</p>
      </div>
      <form className="flex flex-col gap-7" action={clientSignInAction}>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <input
          className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          {/* {pending ? "Redirecting" : "Login"} */}Login
        </button>
      </form>
    </div>
  );
}
