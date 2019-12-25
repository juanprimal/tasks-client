import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserForm from "components/UserForm";

export default function IndexView({ users, onSubmit, onDelete }) {
  function renderUsers(user, index) {
    return (
      <div key={`${index}-${user.name}`}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        <Link to={`/users/${user.id}/edit`}>Edit</Link>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    );
  }

  return (
    <>
      {users.map(renderUsers)}
      <UserForm onSubmit={onSubmit} />
    </>
  );
}

IndexView.propTypes = {
  users: PropTypes.array,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func
};
