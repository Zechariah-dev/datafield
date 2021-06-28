import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Polygon from "../assets/images/polygon1.png";

const validationSchema = yup.object({
  firstname: yup
    .string("enter your firstname")
    .required("firstname is required"),
  lastname: yup.string("enter your lastname").required("lastname is required"),
  email: yup
    .string("enter your email address")
    .email("enter a valid email address")
    .required("email is required"),
  message: yup
    .string("enter your message")
    .max(150, "message should be of maximum length 150"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  inner_wrapper: {
    width: "80%",
    marginBottom: "8rem",
    marginTop: "6rem",
    padding: "5rem",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  text: {
    width: "45%",
    marginLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heading: {
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "45px",
    marginBottom: "2.5rem",
  },
  body: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "23px",
  },
  form: {
    padding: "15% 5%",
    marginTop: "3rem",
    boxShadow: "2px 1px 1px 1px rgba(0, 0, 0, 0.4)",
    height: "40%",
    [theme.breakpoints.down("sm")]: {
      height: "60%",
    },
  },
  input: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  input2: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "1rem",
    },
  },
  email: {
    width: "90%",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "2rem",
    },
  },
  message: {
    width: "90%",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "2rem",
    },
  },
  grid: {
    backgroundImage: `url(${Polygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10% center",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "bottom -25% right",
    },
  },
  btnCon: {
    width: "90%",
  },
  submitBtn: {
    width: "250px",
    float: "right",
    margin: "2rem 0",
    textTransform: "capitalize",
    background: theme.palette.primary.light,
    color: "#fff",
    fontWeight: 500,
    padding: "8px 20px",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
    },
    "&:hover": {
      width: "120px",
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
}));

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner_wrapper}>
        <Grid container className={classes.grid}>
          <Grid item sm={true}>
            <div className={classes.text}>
              <Typography className={classes.heading} variant="h5">
                Contact Us
              </Typography>
              <Typography className={classes.body} variant="body1">
                Want to hear more about our products and services and how we can
                partner together with your team(s)? <br />
                Leave us your contact information and a short message and we'd
                reach out shortly.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                id="firstname"
                name="firstname"
                label="Firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
                className={classes.input}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                id="lastname"
                name="lastname"
                label="Lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
                className={classes.input2}
              />{" "}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className={classes.email}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={6}
                variant="outlined"
                id="message"
                name="message"
                label="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                className={classes.message}
              />
            </Grid>
          </Grid>
          <div className={classes.btnCon}>
            <Button variant="contained" className={classes.submitBtn}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
