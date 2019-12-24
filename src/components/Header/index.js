import React from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./styles";

export default function Header({ title }) {
  const classes = styles();

  return (
    <div className={classes.container}>
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
