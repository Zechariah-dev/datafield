import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Polygon from "../../assets/images/polygon1.png";
import PolygonImage from "../../assets/images/polygon2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#284C80",
    backgroundImage: `url(${PolygonImage}), url(${Polygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right, 73% 50%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
      boxSizing: "border-box",
      backgroundPosition: "right -300% bottom 0px, right 84% bottom 19%",
    },
  },
  content: {
    width: "600px",
    position: "relative",
    top: "-10%",
    left: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      left: 0,
      bottom: "100%",
      top: "auto",
      paddingLeft: "10px",
    },
  },
  heading: {
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  body: {
    fontSize: "12px",
    fontWeight: 700,
    marginTop: "2rem",
    maxWidth: "400px",
    lineHeight: "15px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "320px",
    },
  },
  triangle: {
    position: "absolute",
    right: 0,
    top: "30%",
    [theme.breakpoints.down("sm")]: {
      opacity: 0.5,
      top: "20%",
      bottom: "17%",
      width: "65%",
      left: "20%",
    },
  },
  // p1: {
  //   position: 'absolute',
  //   right: "25%",
  //   top: "53%",
  //   zIndex: 99,
  //   transform: "rotate(-11deg)"
  // },
  // p2: {
  //   position: 'absolute',
  //   right: "0%",
  //   top: "30%",
  //   [theme.breakpoints.down('sm')]: {
  //     opacity: 0.3
  //   }
  // }
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={12}>
          <div className={classes.content}>
            <Typography variant="h5" className={classes.heading}>
              Custom Analytics and Software Solutions Incredible Results
            </Typography>
            <Typography className={classes.body}>
              For over 10years, clients have turned us, A professional IT & Data
              Consulting Agency that’s ready to deliver tailored solutions on
              time
            </Typography>
          </div>
          {/* <img src={Polygon} className={classes.p1} alt="polygon"/>
          <img src={PolygonImage} className={classes.p2} alt="polygon"/> */}
        </Grid>
      </Grid>
    </div>
  );
}
