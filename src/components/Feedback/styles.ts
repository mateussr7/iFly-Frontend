import { makeStyles } from "@material-ui/core";

export const Alert = makeStyles(() => ({
  success: {
    background: "#4CAF50",
    color: "#fff",
    width: "auto",
    height: "6vh",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "18px",
  },
  none: {
    background: "transparent",
    color: "transparent",
  },
  failure: {
    background: "rgb(244,67,54)",
    color: "#fff",
    width: "auto",
    height: "6vh",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "18px",
  },
  warning: {
    background: "#e8ad09",
    color: "#000",
    width: "auto",
    height: "6vh",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "18px",
  },
  icon: {
    fontSize: "35px",
    marginRight: "5px",
  },
}));
