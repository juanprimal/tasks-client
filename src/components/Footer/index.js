import React from "react";
// Styles
import styles from "./styles";

export default function Footer() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <p>footer</p>
    </div>
  );
}
