import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export default function UserForm({ onSubmit, user = {} }) {
  const defaultValues = { defaultValues: { name: user.name } };
  const { register, handleSubmit } = useForm(defaultValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} />
      <input type="submit" />
    </form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object
};
