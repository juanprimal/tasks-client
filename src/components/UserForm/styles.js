import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    padding: "12px"
  },
  buttonContainer: {
    display: "flex",
    padding: "15px",
    "& button": {
      background: "#5078f2",
      color: "#fff",
      border: "none",
      padding: "15px 25px",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "25px"
    }
  },
  formContainer: {
    background: "#f6f6f6",
    display: "flex",
    padding: "60px 15px",
    boxShadow: "inset 0px 4px 19px -11px rgba(0,0,0,0.46)",
    "& input[type=text]": {
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "8px 10px",
      margin: "5px 0"
    },
    "& form": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column"
    }
  },
  controls: {
    display: "flex",
    alignItems: "center",
    "& button": {
      borderRadius: "5px",
      border: "none",
      height: "36px",
      marginRight: "5px",
      minWidth: "80px",
      display: "inline-flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  submitButton: {
    background: "#5078f2",
    color: "#fff"
  },
  cancelButton: {
    color: "#666",
    border: "1px solid #999 !important"
  }
});

export default styles;
