import { createUseStyles } from "react-jss";

const AppStyles = createUseStyles({
  body: {
    background: "#ddd",
    margin: 0,
    fontFamily: "Open Sans"
  },
  mainContainer: {
    background: "#fff",
    boxShadow: "1px 0px 13px -6px rgba(0,0,0,0.75)",
    marginTop: "34px",
    borderRadius: "5px"
  }
});

export default AppStyles;
