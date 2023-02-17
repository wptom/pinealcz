import React from "react";
import { useAPI } from "./../context/apiContext";

export default function Users() {
  const { users } = useAPI();
  console.log(users);
  return (
    <ul>
      {users.footerBoxes && users.footerBoxes.map(u => (
        <li key={u.id}>{u.title}</li>
      ))}
    </ul>
  );
}
