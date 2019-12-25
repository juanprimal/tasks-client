import { createUseStyles } from "react-jss";

const HeaderStyles = createUseStyles({
  container: {
    padding: "12px",
    textAlign: "center",
    borderBottom: "1px solid #eee",
    "& svg": {
      width: "30px",
      height: "30px",
      marginRight: "5px",
      color: "#999"
    }
  },
  back: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#999"
  }
});

export default HeaderStyles;
