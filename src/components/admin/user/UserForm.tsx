import React from "react";
import CreateUserForm from "./CreateUserForm";
import EditUserForm from "./EditUserForm";

export default function UserForm({ crudUser }: { crudUser: string }) {
  console.log(crudUser)
  if (crudUser === "tambah-user") {
    return <CreateUserForm />;
  } else {
    return <EditUserForm crudUser={crudUser} />;
  }
}
