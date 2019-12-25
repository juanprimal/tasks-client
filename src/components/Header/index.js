import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
// Styles
import styles from "./styles";

export default function Header({ title, backRoute }) {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div>
        <h1>{title}</h1>
        {backRoute && (
          <Link to={backRoute}>
            <div className={classes.back}>
              <FaArrowAltCircleLeft />
              Go Back
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  backRoute: PropTypes.string
};
