import React, { useState, useEffect, useCallback } from "react";
import { getUser } from "api/usersApi";
import { getUserTasks, createUserTask, deleteUserTask } from "api/userTasksApi";
import { useParams } from "react-router-dom";
import ShowView from "./showView";

export default function UsersShow() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [userTasks, setUserTasks] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUser(params.id);
      setUser(response.data);
    };
    fetchResults();
  }, [params.id]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUserTasks(params.id);
      setUserTasks(response.data);
    };
    fetchResults();
  }, [params.id]);

  const handleCreateUserTask = async (task, form) => {
    const response = await createUserTask(params.id, task);
    // clean form imputs
    form.target.description.value = "";
    form.target.state.checked = false;
    setUserTasks([...userTasks, response.data]);
    return response;
  };

  const handleDeleteUserTask = async (userId, id) => {
    const response = await deleteUserTask(userId, id);
    const filteredUserTasks = userTasks.filter(task => {
      return task.id !== id;
    });

    setUserTasks(filteredUserTasks);
    return response;
  };

  const handleVisible = useCallback(() => {
    setFormVisible(!formVisible);
  }, [formVisible]);

  return (
    userTasks &&
    user && (
      <ShowView
        userTasks={userTasks}
        user={user}
        onSubmit={handleCreateUserTask}
        onDelete={handleDeleteUserTask}
        formVisible={formVisible}
        handleVisible={handleVisible}
      />
    )
  );
}
