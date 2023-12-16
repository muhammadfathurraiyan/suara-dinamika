import Link from "next/link";
import { PiEye, PiPen, PiTrash } from "react-icons/pi";

export default function Article() {
  return (
    <div className="px-4 py-12 flex flex-col gap-12">
      <div>
        <h1 className="text-3xl font-black uppercase">Article</h1>
        <p>Halaman untuk melakukan CRUD Article</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="py-2 px-8 bg-neutral-900 hover:bg-neutral-900/90 duration-300 uppercase w-fit text-neutral-50"
          href="/"
        >
          Buat
        </Link>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm border border-neutral-900">
            <thead className="uppercase text-center bg-neutral-900 text-neutral-100">
              <tr>
                <th className="p-2">No</th>
                <th className="p-2">Judul</th>
                <th className="p-2">Body</th>
                <th className="p-2">Category</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="p-2 text-center">1</td>
                <td className="p-2 text-center border-x border-neutral-900 truncate max-w-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </td>
                <td className="p-2 text-center truncate max-w-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                  laborum asperiores? Quae beatae ullam sint consectetur!
                  Dolorum ut sapiente molestias consequatur! Cum commodi
                  corporis vero alias, libero nostrum fugit dolor rem, ipsa
                  molestiae eveniet nulla ad minima soluta ea earum illo
                  explicabo. Ducimus, ea deserunt officia sequi rem delectus
                  earum.
                </td>
                <td className="p-2 text-center border-x border-neutral-900">
                  Budaya
                </td>
                <td className="p-2 text-center flex items-center justify-center gap-2">
                  <Link
                    href="/"
                    aria-label="Read"
                    className="hover:text-blue-500"
                  >
                    <PiEye size={20} />
                  </Link>
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
