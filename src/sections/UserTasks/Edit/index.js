import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import UserTaskForm from "components/UserTaskForm";
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
    <div>
      {userTask && (
        <UserTaskForm onSubmit={handleUpdateUserTask} task={userTask} />
      )}
    </div>
  );
}
