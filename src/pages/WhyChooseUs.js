import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Polygon from "../assets/images/polygon1.png";
import Flower from "../assets/images/flower.svg";

const validationSchema = yup.object({
  name: yup.string("enter your firstname").required("firstname is required"),
  phone: yup
    .number("enter phone no")
    .required("phone is required")
    .positive()
    .integer(),
  email: yup
    .string("enter your email address")
    .email("enter a valid email address")
    .required("email is required"),
  company: yup
    .string("enter your company name")
    .required("company name is required"),
  message: yup
    .string("enter your message")
    .max(150, "message should be of maximum length 150"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
  },
  text: {
    height: "100%",
    backgroundImage: `url(${Flower})`,
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
    },
  },
  heading: {
    color: "#4F4C4C",
    fontSize: "36px",
    lineHeight: "45px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  body: {
    color: "#4F4C4C",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 700,
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginTop: "1rem",
    },
  },
  innerWrapper: {
    padding: "0 10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      padding: 0,
    },
  },
  polygon: {
    width: "100%",
    height: "150px",
    backgroundImage: `url(${Polygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
  },
  input: {
    width: "80%",
    marginTop: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  message: {
    width: "90%",
    marginTop: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
  achievement: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    padding: "30px 0",
  },
  container: {
    width: "80%",
    height: "100%",
    margin: "0 auto",
  },
  record: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  percentage: {
    borderBottom: "2px solid red",
    width: "100px",
    fontSize: "50px",
    padding: "20px",
    color: "#fff",
  },
  topic: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 300,
    marginTop: "2rem",
    padding: "0 15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginTop: "1rem",
    },
  },
  articleWrapper: {
    padding: "5% 15%",
  },
}));

export default function WhyChooseUs() {
  const classes = useStyles();

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

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <div className={classes.text}>
              <Typography
                variant="h4"
                component="h3"
                className={classes.heading}
              >
                Tableau Consulting & Development Experts
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Want to hear more about our products and services and how we can
                partner together with your team(s)? Leave us your contact
                information and a short message and we'd reach out shortly.
              </Typography>
            </div>
          </Grid>
          <Grid item md={8} xs={12}>
            <div className={classes.innerWrapper}>
              <Hidden smDown>
                <div className={classes.polygon}></div>
              </Hidden>
              <form onSubmit={formik.handleSubmit} className={classes.form}>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <TextField
                      variant="outlined"
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      variant="outlined"
                      id="phone"
                      name="phone"
                      label="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      className={classes.input}
                    />{" "}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <TextField
                      variant="outlined"
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      variant="outlined"
                      id="company"
                      name="company"
                      label="Company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.company && Boolean(formik.errors.company)
                      }
                      helperText={
                        formik.touched.company && formik.errors.company
                      }
                      className={classes.input}
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
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
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
          </Grid>
        </Grid>
      </div>

      <div className={classes.achievement}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={4} justify="center" alignContent="center">
              <div className={classes.record}>
                <div className={classes.percentage}>70%</div>
                <Typography variant="body1" className={classes.topic}>
                  of our clients projects leverage data and analytics platform
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} justify="center" alignContent="center">
              <div className={classes.record}>
                <div className={classes.percentage}>80%</div>
                <Typography variant="body1" className={classes.topic}>
                  of our clients projects are built for the cloud
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4} justify="center" alignContent="center">
              <div className={classes.record}>
                <div className={classes.percentage}>80%</div>
                <Typography variant="body1" className={classes.topic}>
                  of our business originates from direct referrals and repeat
                  work with clients
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.article}>
        <div className={classes.articleWrapper}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" style={{ fontWeight: 600 }}>
                Empower people with the power of data
              </Typography>
              <Typography style={{ marginTop: "1rem" }}>
                Analyists value visual-based data discovery. With capabilities
                to connect to a wide range of source systems. Business users can
                quickly review data sets and share insights with Tableau Online.
                Features like Ask Data, which empowers users to analyze data
                instantly with simple questions or statements and Tableau Prep.
                which enables data shaping, cleansing and refreshing make
                Tableau a power tool for analytics.
              </Typography>

              <Typography style={{ marginTop: "1rem" }}>
                One Six Solutions is committed to providing clients the skills
                to harness Tableau with visualization and dashboard best
                practices.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" style={{ fontWeight: 600 }}>
                Deploy in the cloud with governed controls
              </Typography>
              <Typography style={{ marginTop: "1rem" }}>
                With Tableau Online,Tableau works to keep your data secure and
                private, if an organization requries greater flexibility and
                capability to collaborate with IT. Tableau Server provides the
                governance to help IT build and manage data in a centralized
                environment.
              </Typography>

              <Typography style={{ marginTop: "1rem" }}>
                One Six Solutions recommends the appropriate environment to
                manage your Tableau, infrastructure and build a BI life-cycle
                management process that promotes a healthy partnership between
                the business and IT.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}
