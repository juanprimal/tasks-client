import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { FaPencilAlt, FaTrashAlt, FaEye } from "react-icons/fa";

// Styles
import styles from "./styles";

export default function Header({
  title,
  showLink,
  showButton,
  editLink,
  onClick,
  todo
}) {
  const classes = styles();

  const containerClasses = classNames({
    [classes.container]: true,
    [classes.done]: !!todo
  });

  return (
    <div className={containerClasses}>
      <div className={classes.content}>
        {showLink ? <Link to={showLink}>{title}</Link> : <p>{title}</p>}
      </div>
      <div className={classes.controls}>
        {showButton && showLink && (
          <Link to={showLink}>
            <FaEye />
          </Link>
        )}
        <Link to={editLink}>
          <FaPencilAlt />
        </Link>
        <button onClick={onClick}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showLink: PropTypes.string,
  showButton: PropTypes.bool,
  editLink: PropTypes.string,
  onClick: PropTypes.func,
  todo: PropTypes.bool
};
