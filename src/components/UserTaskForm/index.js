import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export default function UserTaskForm({ onSubmit, task = {} }) {
  const defaultValues = {
    defaultValues: { description: task.description, state: task.state }
  };
  const { register, handleSubmit } = useForm(defaultValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="description" ref={register} />
      <input type="checkbox" name="state" ref={register} />
      <input type="submit" />
    </form>
  );
}

UserTaskForm.propTypes = {
  onSubmit: PropTypes.func,
  task: PropTypes.object
};
