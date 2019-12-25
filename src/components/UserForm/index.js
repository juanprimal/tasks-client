import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { FaSave, FaPlus, FaWindowClose } from "react-icons/fa";
import styles from "./styles";

export default function UserForm({ onSubmit, user = {}, visible, setVisible }) {
  const defaultValues = { defaultValues: { name: user.name } };
  const { register, handleSubmit, errors } = useForm(defaultValues);
  const classes = styles();

  return (
    <>
      {visible && (
        <div className={classes.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="name">Name:</label>
            <input name="name" type="text" ref={register({ required: true })} />
            {errors.name && <p>This field is required</p>}
            <div className={classes.controls}>
              <button type="submit" className={classes.submitButton}>
                <FaSave />
                Save
              </button>
              <button className={classes.cancelButton} onClick={setVisible}>
                <FaWindowClose />
                close
              </button>
            </div>
          </form>
        </div>
      )}
      {!visible && (
        <div className={classes.buttonContainer}>
          <button onClick={setVisible}>
            <FaPlus />
            Add New User
          </button>
        </div>
      )}
    </>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func
};
