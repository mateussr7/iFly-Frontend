import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { ApplicationState } from "../../store/store";
import { connect, useSelector } from "react-redux";
import { getLoading, getMessage } from "../../store/feedback/selectors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: 50,
      color: "#fff",
    },
  })
);

function BackdropLoading() {
  const classes = useStyles();
  const message = useSelector(getMessage);
  const loading = useSelector(getLoading);

  if (!loading) return null;

  return (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <Typography component="h6" color="inherit" style={{ marginRight: 10 }}>
          {message}
        </Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default BackdropLoading;
