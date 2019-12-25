import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserTaskForm from "components/UserTaskForm";

export default function ShowView({ userTasks, user, onSubmit, onDelete }) {
  function renderTasks(task, index) {
    return (
      <div key={`${index}-${task.id}`}>
        {task.description}
        <Link to={`/users/${user.id}/user_task/${task.id}/edit`}>Edit</Link>
        <button onClick={() => onDelete(user.id, task.id)}>Delete</button>
      </div>
    );
  }

  return (
    <>
      <p>{user.name}</p>
      {userTasks.map(renderTasks)}
      <UserTaskForm onSubmit={onSubmit} />
    </>
  );
}

ShowView.propTypes = {
  userTasks: PropTypes.array,
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func
};
