import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import UserForm from "components/UserForm";
import { getUser, updateUser } from "api/usersApi";

export default function UsersEdit() {
  const params = useParams();
  let history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUser(params.id);
      setUser(response.data);
    };
    fetchResults();
  }, [params.id]);

  const handleUpdateUser = async user => {
    const response = await updateUser(params.id, user);
    history.push("/users");
    return response;
  };

  return (
    <div>{user && <UserForm onSubmit={handleUpdateUser} user={user} />}</div>
  );
}
