import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Header from "components/Header";
import UserForm from "components/UserForm";
import ContentRow from "components/ContentRow";

export default function IndexView({
  users,
  onSubmit,
  onDelete,
  formVisible,
  handleVisible
}) {
  function renderUsers(user, index) {
    return (
      <ContentRow
        key={`${index}-${user.name}`}
        title={user.name}
        showLink={`/users/${user.id}`}
        editLink={`/users/${user.id}/edit`}
        onClick={() => onDelete(user.id)}
        showButton
      />
    );
  }

  return (
    <>
      <Header title="Task Manager" />
      {users.map(renderUsers)}
      <UserForm
        onSubmit={onSubmit}
        visible={formVisible}
        setVisible={handleVisible}
      />
    </>
  );
}

IndexView.propTypes = {
  users: PropTypes.array,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
  formVisible: PropTypes.bool,
  handleVisible: PropTypes.func
};
