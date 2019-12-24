import React from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./styles";

export default function Layout({ children }) {
  const classes = styles();

  return <div className={classes.container}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node
};
