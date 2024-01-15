export default function ProfileCard({
  profile,
}: {
  profile: {
    created_at: string;
    id: string;
    role: string;
    user_id: string;
    user: {
      created_at: string;
      email: string;
      id: string;
      image: string;
      name: string;
    } | null;
  };
}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-bold ">Tampilan profile anda:</h2>
      <div className="flex items-center gap-2 border border-neutral-900/30 w-fit p-2 shadow-md">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src="https://picsum.photos/600"
          alt=""
        />
        <div>
          <p className="font-semibold text-xl uppercase">Sabirin Lamno</p>
          <p className="-mt-1">Editor</p>
        </div>
      </div>
    </div>
  );
}
