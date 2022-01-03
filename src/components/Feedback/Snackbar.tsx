import { Paper, Snackbar } from "@material-ui/core";
import { Alert } from "./styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../../store/feedback/actions";
import { MessageAction } from "../../store/feedback/types";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import { getMessageAction } from "../../store/feedback/selectors";

const SnackBarComponent = () => {
  const styles = Alert();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const showInfo = useSelector(getMessageAction);
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(showInfo.show);
    if (showInfo.show) {
      setMessage(showInfo.message);
    }
  }, [showInfo]);

  function getCorrectIcon() {
    if (showInfo.type === "success") {
      return <CheckIcon className={styles.icon} />;
    }
    if (showInfo.type === "failure") {
      return <ErrorIcon className={styles.icon} />;
    }
    if (showInfo.type === "warning") {
      return <WarningIcon className={styles.icon} />;
    }
    return <span></span>;
  }
  return (
    <>
      <Snackbar open={show} autoHideDuration={2000}>
        <Paper
          elevation={1}
          className={styles[showInfo.type]}
          onClick={() => dispatch(hideMessage())}
        >
          {getCorrectIcon()}
          {message}
        </Paper>
      </Snackbar>
    </>
  );
};

export default SnackBarComponent;
