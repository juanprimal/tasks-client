import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { FaSave, FaPlus, FaWindowClose } from "react-icons/fa";
import styles from "./styles";

export default function UserTaskForm({
  onSubmit,
  task = {},
  visible,
  setVisible
}) {
  const defaultValues = {
    defaultValues: { description: task.description, state: task.state }
  };
  const { register, handleSubmit } = useForm(defaultValues);
  const classes = styles();

  return (
    <>
      {visible && (
        <div className={classes.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input name="description" type="text" ref={register} />
            <label>Done:</label>
            <input type="checkbox" name="state" ref={register} />
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
            Add New Task
          </button>
        </div>
      )}
    </>
  );
}

UserTaskForm.propTypes = {
  onSubmit: PropTypes.func,
  task: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func
};
