import React, { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser } from "api/usersApi";
import IndexView from "./indexView";

export default function UsersIndex() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUsers();
      console.log(response.data);
      setUsers(response.data);
    };
    fetchResults();
  }, []);

  const handleCreateUser = async (user, otro) => {
    const response = await createUser(user);
    console.log(otro);
    otro.target.name.value = "";
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
