import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      background: "#f7f7f7",
      color: "#fff"
    },
    "& a": {
      fontWeight: "bold"
    },
    "& a:hover": {
      color: "#5078f2"
    },
    "& p": {
      color: "#333 !important",
      fontWeight: "bold",
      margin: 0
    }
  },
  done: {
    "& p": {
      textDecoration: "line-through",
      color: "#999 !important",
      fontWeight: 100
    }
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    "& a": {}
  },
  controls: {
    minWidth: "100px",
    "& a, & button": {
      borderRadius: "38px",
      width: "38px",
      height: "38px",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center"
    },
    "& a": {
      background: "#5078f2",
      color: "#fff",
      marginRight: "5px",
      verticalAlign: "bottom",
      "&:hover": {
        color: "#fff",
        background: "#496cd8"
      },
      "& svg": {
        verticalAlign: "text-bottom"
      }
    },
    "& button": {
      background: "#fd5b5b",
      color: "#fff",
      border: "none",
      "&:hover": {
        background: "#e25252",
        cursor: "pointer"
      }
    }
  }
});

export default styles;
