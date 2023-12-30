"use client";
import deleteUserAction from "@/actions/user/deleteUserAction";
import { Dispatch, SetStateAction, useState } from "react";
import { PiTrash, PiWarningCircleThin, PiX } from "react-icons/pi";

const ConfirmDeleteModal = ({
  id,
  setModal,
}: {
  id: string;
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const deleteUserClientAction = async () => {
    const result = await deleteUserAction(id);
    if (result?.error) {
      alert(result.error);
    }
    setModal(false);
  };
  return (
    <div className="flex justify-center items-center fixed inset-x-0 inset-y-0 bg-neutral-900/50 shrink z-50 grow-0">
      <div className="p-5 min-h-[100px] gap-4 min-w-[300px] flex flex-col grow-0 relative bg-neutral-100 rounded shadow-md border border-neutral-900/30">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-xl font-bold">Hapus</h2>
          <PiWarningCircleThin className="text-red-700" size={100} />
          <p>Apakah anda yakin ingin menghapus akun ini?</p>
        </div>
        <div
          className="absolute right-2 top-2 justify-center flex text-xl text-center cursor-pointer"
          aria-label="Close modal"
          onClick={() => setModal(false)}
        >
          <PiX />
        </div>
        <form action={deleteUserClientAction}>
          <button className="py-2 px-8 bg-red-700 hover:bg-red-900/90 duration-300 uppercase w-fit text-neutral-50">
            Hapus
          </button>
        </form>
      </div>
    </div>
  );
};

export default function DeleteButton({ id }: { id: string }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div
        aria-label="Delete"
        onClick={() => setModal(true)}
        className="hover:text-red-500"
      >
        <PiTrash size={20} />
      </div>
      {modal && <ConfirmDeleteModal id={id} setModal={setModal} />}
    </>
  );
}
