import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import Logo from "../../assets/images/logo.svg";

const headerData = [
  {
    label: "about",
    href: "/about",
  },
  {
    label: "why choose us ",
    href: "/why-choose-us",
  },
  {
    label: "contact us",
    href: "/contact",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-root": {
      backgroundColor: "#fff",
      paddingLeft: "15px",
    },
    "& .MuiSvgIcon-root": {
      fill: theme.palette.primary.main,
    },
  },
  NavBtn: {
    textTransform: "capitalize",

    fontSize: "16px",
    width: "150px",
    color: "#000",
  },
  MenuBtn: {
    textTransform: "capitalize",
    textAlign: "right",

    fontSize: "16px",
    width: "150px",
    color: "#000",
  },
  drawerContainer: {
    height: "100%",
    width: "calc(100vw)",
    color: "#fff",
    background: theme.palette.primary.main,
    padding: "20px 30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  drawerItems: {
    position: "absolute",
    top: "8rem",
  },
  close: {
    color: "#fff",
    position: "absolute",
    right: 0,
    bottom: "20%",
    "& .MuiSvgIcon-root": {
      width: "3em",
      height: "3em",
    },
  },
  drawerLink: {
    fontSize: "2rem",
    lineHeight: "4rem",
    color: "#fff",
    textDecoration: "none",
    textTransform: "capitalize",
    textAlign: "right",
  },
  drawerBtn: {
    border: "2px solid #fff",
    padding: "15px",
    color: "#fff",
    textAlign: "center",
    margin: "1rem 0 1rem auto",
    width: "30%",
    textDecoration: "none",
  },
  authBtn: {
    display: "flex",
    transition: "1s ease-in-out 0.5s",
  },
  loginBtn: {
    fontSize: "16px",
    textTransform: "capitalize",

    fontWeight: 700,
    border: "1px solid #000",
    padding: "5px 35px",
    marginRight: "20px",
    color: "#000",
    "&:hover": {
      borderRadius: "20px",
      border: "1px solid #6944D8",
      color: "#6944D8",
    },
  },
  signupBtn: {
    fontSize: "16px",
    textTransform: "capitalize",

    fontWeight: 700,
    padding: "5px 35px",
    background: theme.palette.primary.light,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        {yankeepayLogo}
        <Grid container>
          <Grid item sm={true}></Grid>
          <Grid item>{getMenuButtons()}</Grid>
        </Grid>
      </Toolbar>
    );
  };

  const yankeepayLogo = (
    <img src={Logo} height="30px" width="auto" alt="yankeepay-logo" />
  );

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <Box display="flex" flexGrow={1} textAlign="center">
          {yankeepayLogo}
        </Box>

        <IconButton
          edge="end"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <div className={classes.drawerContainer}>
            <a href="/about" className={classes.drawerLink}>
              About
            </a>
            <a href="/why-choose-us" className={classes.drawerLink}>
              Why Choose Us
            </a>
            <a href="/contact" className={classes.drawerLink}>
              Contact Us
            </a>
            <IconButton onClick={handleDrawerClose} className={classes.close}>
              <CloseIcon />
            </IconButton>
          </div>
        </Drawer>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headerData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          href={href}
          className={classes.MenuBtn}
          disableRipple
        >
          {label}
        </Button>
      );
    });
  };


  return (
    <Container maxWidth="xl">
      <header className={classes.root}>
        <AppBar position="sticky" elevation={0}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </Container>
  );
}
