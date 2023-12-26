import Login from "@/components/auth/Login";
import { readUserSession } from "@/libs/action";
import { redirect } from "next/navigation";

export default async function Auth() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/admin");
  }
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4 min-h-screen flex flex-col items-center justify-center">
      <Login />
    </section>
  );
}
