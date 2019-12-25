import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import UserTaskForm from "components/UserTaskForm";
import Header from "components/Header";
import { getUserTask, updateUserTask } from "api/userTasksApi";

export default function UsersEdit() {
  const params = useParams();
  let history = useHistory();

  const [userTask, setUserTask] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getUserTask(params.user_id, params.id);
      setUserTask(response.data);
    };
    fetchResults();
  }, [params.id, params.user_id]);

  const handleUpdateUserTask = async task => {
    const response = await updateUserTask(params.user_id, params.id, task);
    history.push(`/users/${params.user_id}`);
    return response;
  };

  return (
    userTask && (
      <div>
        <Header
          title={`Edit: ${userTask.description}`}
          backRoute={`/users/${params.user_id}`}
        />
        <UserTaskForm onSubmit={handleUpdateUserTask} task={userTask} visible />
      </div>
    )
  );
}
