import React from "react";
import PropTypes from "prop-types";
import UserTaskForm from "components/UserTaskForm";
import Header from "components/Header";
import ContentRow from "components/ContentRow";

export default function ShowView({
  userTasks,
  user,
  onSubmit,
  onDelete,
  formVisible,
  handleVisible
}) {
  function renderTasks(task, index) {
    return (
      <ContentRow
        key={`${index}-${task.id}`}
        title={task.description}
        todo={!!task.state}
        editLink={`/users/${user.id}/user_task/${task.id}/edit`}
        onClick={() => onDelete(user.id, task.id)}
      />
    );
  }

  return (
    <>
      <Header title={`${user.name}, Tasks`} backRoute={`/users`} />
      {userTasks.map(renderTasks)}
      <UserTaskForm
        onSubmit={onSubmit}
        visible={formVisible}
        setVisible={handleVisible}
      />
    </>
  );
}

ShowView.propTypes = {
  userTasks: PropTypes.array,
  user: PropTypes.object,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
  formVisible: PropTypes.bool,
  handleVisible: PropTypes.func
};
