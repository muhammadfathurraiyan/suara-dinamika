import readUserAction from "@/actions/user/readUserAction";
import Link from "next/link";
import { PiPencilLine } from "react-icons/pi";
import DeleteButton from "./DeleteButton";

export default async function UserTable() {
  const { data: permissions } = await readUserAction();
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border border-neutral-900">
        <thead className="uppercase text-center bg-neutral-900 text-neutral-100">
          <tr>
            <th className="p-2">No</th>
            <th className="p-2">Nama</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Daftar</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions?.map((permission, index) => (
            <tr
              key={permission.user_id}
              className="border-b border-neutral-900"
            >
              <td className="p-2 text-center">{++index}</td>
              <td className="p-2 text-center border-x border-neutral-900">
                {permission.user?.name}
              </td>
              <td className="p-2 text-center border-x border-neutral-900">
                {permission.user?.email}
              </td>
              <td className="p-2 text-center border-x border-neutral-900">
                {permission.role}
              </td>
              <td className="p-2 text-center border-x border-neutral-900">
                {new Date(permission.created_at).toDateString()}
              </td>
              <td className="p-2 text-center flex items-center justify-center gap-2">
                <Link
                  href={`/admin/user/edit-user?id=${permission.user_id}`}
                  aria-label="Update"
                  className="hover:text-green-600"
                >
                  <PiPencilLine size={20} />
                </Link>
                <DeleteButton id={permission.user?.id!} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
