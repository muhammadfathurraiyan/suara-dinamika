export default function Login() {
  return (
    <div className="p-4 border flex flex-col gap-12 border-neutral-950/30 md:w-1/3 shadow-md">
      <div>
        <h2 className="font-black text-3xl uppercase">Login Form</h2>
        <p>Silahkan login untuk menulis article.</p>
      </div>
      <form className="flex flex-col gap-7" action="">
        <input
          className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-transparent focus:outline-none p-2 border-b border-neutral-900/30 w-full focus:border-b-2 focus:border-neutral-900/50"
          type="password"
          placeholder="Password"
        />
        <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          Login
        </button>
      </form>
    </div>
  );
}
