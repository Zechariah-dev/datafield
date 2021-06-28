import React from "react";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function loadingPage(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CircularProgress />
    </div>
  );
}
