import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

import Clipboard from "../../assets/images/clipboard.svg";
import Vector from "../../assets/images/vector.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3rem 0 3rem 2rem",
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.75,
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0 2rem 0.7rem",
    },
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    lineHeight: "30px",
    marginBottom: theme.spacing(2),
  },
  body: {
    maxWidth: "40%",
    lineHeight: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  p_body: {
    maxWidth: "67%",
    lineHeight: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  fadedCircle: {
    height: "120px",
    width: "120px",
    borderRadius: "50%",
    background: "#EBEFF8",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    background: theme.palette.primary.light,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  c_container: {
    width: "90%",
    margin: "6em auto",
  },
  card: {
    height: "100%",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    boxShadow: `0 0 0 1px ${theme.palette.secondary.main}`,
    borderRadius: "5px",
    padding: "10%",
    margin: theme.spacing(2),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  c_title: {
    textTransform: "uppercase",
    fontWeight: 700,
  },
  c_icon: {
    height: "50px",
    marginBottom: theme.spacing(1),
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
        <Grid container>
          <Grid xs={12} item>
            <Box mt={6}>
              <Typography variant="h5" component="h3" className={classes.title}>
                industries we serve
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.body}
              >
                It doesn 't matter what industry you work in or how large your
                market footprint is, if you have technology related problem we
                want to hear from you.Our Past clients have operated in wide
                varieties of industries and field.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.c_container}
        >
          <Grid container>
            <Grid md={4} xs={12} item className={classes.center}>
              <div className={classes.card}>
                <img
                  src={Clipboard}
                  alt="clipboard"
                  className={classes.c_icon}
                />
                <Typography variant="h6" className={classes.c_title}>
                  health care
                </Typography>
                <Typography variant="body1">
                  It doesn't matter whatindustry you work in orhow large your
                  market footprint is.
                </Typography>
              </div>
            </Grid>
            <Grid md={4} xs={12} item className={classes.center}>
              <div className={classes.card}>
                <img
                  src={Clipboard}
                  alt="clipboard"
                  className={classes.c_icon}
                />
                <Typography variant="h6" className={classes.c_title}>
                  health care
                </Typography>
                <Typography variant="body1">
                  It doesn't matter whatindustry you work in orhow large your
                  market footprint is.
                </Typography>{" "}
              </div>
            </Grid>
            <Grid md={4} xs={12} item className={classes.center}>
              <div className={classes.card}>
                <img
                  src={Clipboard}
                  alt="clipboard"
                  className={classes.c_icon}
                />
                <Typography variant="h6" className={classes.c_title}>
                  health care
                </Typography>
                <Typography variant="body1">
                  It doesn't matter whatindustry you work in orhow large your
                  market footprint is.
                </Typography>{" "}
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          my={4}
          className={classes.c_container}
        >
          <Grid container>
            <Grid md={4} xs={12} item className={classes.center}>
              <div className={classes.card}>
                <img
                  src={Clipboard}
                  alt="clipboard"
                  className={classes.c_icon}
                />
                <Typography variant="h6" className={classes.c_title}>
                  health care
                </Typography>
                <Typography variant="body1">
                  It doesn't matter whatindustry you work in orhow large your
                  market footprint is.
                </Typography>
              </div>
            </Grid>
            <Grid md={4} xs={12} item className={classes.center}>
              <div className={classes.card}>
                <img
                  src={Clipboard}
                  alt="clipboard"
                  className={classes.c_icon}
                />
                <Typography variant="h6" className={classes.c_title}>
                  health care
                </Typography>
                <Typography variant="body1">
                  It doesn't matter whatindustry you work in orhow large your
                  market footprint is.
                </Typography>{" "}
              </div>
            </Grid>
            <Grid md={4} xs={12} item className={classes.center}>
              <div className={classes.card}>
                <img
                  src={Clipboard}
                  alt="clipboard"
                  className={classes.c_icon}
                />
                <Typography variant="h6" className={classes.c_title}>
                  health care
                </Typography>
                <Typography variant="body1">
                  It doesn't matter whatindustry you work in orhow large your
                  market footprint is.
                </Typography>{" "}
              </div>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid md={6} xs={12} item>
            <Box mt={6}>
              <Typography variant="h5" component="h3" className={classes.title}>
                our partners
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.p_body}
              >
                It doesn 't matter what industry you work in or how large your
                market footprint is, if you have technology related problem we
                want to hear from you.Our Past clients have operated in wide
                varieties of industries and field.
              </Typography>
            </Box>
          </Grid>
          <Grid md={6} xs={12} item>
            <Grid container>
              <Grid xs={12} item>
                <Box
                  my={2}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  <div className={classes.fadedCircle}>
                    <div className={classes.circle}> </div>
                  </div>
                  <div className={classes.fadedCircle}>
                    <div className={classes.circle}> </div>
                  </div>
                  <div className={classes.fadedCircle}>
                    <div className={classes.circle}> </div>
                  </div>
                </Box>
              </Grid>
              <Grid xs={12} item>
                <Box
                  my={2}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  <div className={classes.fadedCircle}>
                    <div className={classes.circle}> </div>
                  </div>
                  <div className={classes.fadedCircle}>
                    <div className={classes.circle}> </div>
                  </div>
                  <div className={classes.fadedCircle}>
                    <div className={classes.circle}> </div>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
