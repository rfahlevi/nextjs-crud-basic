"use client"

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import { deleteContact } from "@/lib/actions";

export const CreateButton = () => {
  return (
    <Link
      href={"/contacts/create"}
      className="inline-flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 px-5 py-[9px] rounded-sm text-sm text-white"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({id}: {id: string}) => {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteContactById = deleteContact.bind(null, id)
  return (
    <form action={DeleteContactById}>
       <button className="rounded-sm border p-1 hover:bg-gray-100">
      <IoTrashOutline size={20} />
    </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center ${
        pending ? "opacity-50 cursor-progress" : ""
      }`}
      disabled={pending}
    >
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
