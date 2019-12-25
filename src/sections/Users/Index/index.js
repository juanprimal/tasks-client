import React, { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser } from "api/usersApi";
import IndexView from "./indexView";

export default function UsersIndex() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };
    fetchResults();
  }, []);

  const handleCreateUser = async (user, form) => {
    const response = await createUser(user);
    // clean form inputs
    form.target.name.value = "";
    setUsers([...users, response.data]);
    return response;
  };

  const handleDeleteUser = async id => {
    const response = await deleteUser(id);
    const filteredUsers = users.filter(user => {
      return user.id !== id;
    });

    setUsers(filteredUsers);
    return response;
  };

  return (
    <IndexView
      users={users}
      onSubmit={handleCreateUser}
      onDelete={handleDeleteUser}
    />
  );
}
