import Link from "next/link";
import { PiPen, PiTrash } from "react-icons/pi";

export default function User() {
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Manage User</h1>
        <p>Halaman management user.</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50"
          href="/admin/user/tambah-user"
        >
          Tambah
        </Link>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm border border-neutral-900">
            <thead className="uppercase text-center bg-neutral-900 text-neutral-100">
              <tr>
                <th className="p-2">No</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="p-2 text-center">1</td>
                <td className="p-2 text-center border-x border-neutral-900">
                  Sabirin Lamno
                </td>
                <td className="p-2 text-center border-x border-neutral-900">
                  sabirin@suaradinamika.com
                </td>
                <td className="p-2 text-center border-x border-neutral-900">
                  Editor
                </td>
                <td className="p-2 text-center flex items-center justify-center gap-2">
                  <Link
                    href="/"
                    aria-label="Update"
                    className="hover:text-green-600"
                  >
                    <PiPen size={20} />
                  </Link>
                  <Link
                    href="/"
                    aria-label="Delete"
                    className="hover:text-red-500"
                  >
                    <PiTrash size={20} />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
