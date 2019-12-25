import { createUseStyles } from "react-jss";

const AppStyles = createUseStyles({
  body: {
    background: "#ededed",
    margin: 0,
    fontFamily: "Open Sans",
    color: "#333",
    "& a": {
      color: "#333",
      textDecoration: "none"
    }
  }
});

export default AppStyles;
