export default function EditProfile() {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xl font-bold">Edit profile:</p>
      <form className="flex flex-col gap-7 w-1/3" action="">
        <input
          className="bg-transparent focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-2 focus:border-neutral-900/50"
          type="text"
          placeholder="Nama"
          name="name"
        />
        <div>
          <label className="font-semibold" htmlFor="image">
            Foto
          </label>
          <input
            className="bg-transparent text-sm focus:outline-none p-2 border border-neutral-900/30 w-full focus:border-neutral-900/50"
            type="file"
          />
        </div>
        <button className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50 ">
          Edit
        </button>
      </form>
    </div>
  );
}
