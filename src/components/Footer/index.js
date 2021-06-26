import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(6),
    "& .MuiListItem-gutters": {
      paddingLeft: 0,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.white
    }
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid md={true} xs={12} style={{ marginTop: "1rem" }}></Grid>
          <Grid md={true} xs={12} style={{ marginTop: "1rem" }}>
            <Typography variant="h5" className={classes.listHeading}>
              Company
            </Typography>

            <List>
              <ListItem button dense>
                <ListItemText primary="feed" />
              </ListItem>
              <ListItem button dense>
                <ListItemText primary="Help" />
              </ListItem>
            </List>
          </Grid>
          <Grid md={true} xs={12} style={{ marginTop: "1rem" }}>
            <Typography variant="h5" className={classes.listHeading}>
              Solutions
            </Typography>

            <List>
              <ListItem button dense>
                <ListItemText primary="Startups" />
              </ListItem>

              <ListItem button dense>
                <ListItemText primary="Investors" />
              </ListItem>

              <ListItem button dense>
                <ListItemText primary="Hubs" />
              </ListItem>

              <ListItem button dense>
                <ListItemText primary="Policy Makers" />
              </ListItem>

              <ListItem button dense>
                <ListItemText primary="Research" />
              </ListItem>
            </List>
          </Grid>
          <Grid md={true} xs={12} style={{ marginTop: "1rem" }}>
            <Typography variant="h5" className={classes.l_heading}>
              Information
            </Typography>
            <List>
              <ListItem button dense>
                <ListItemText primary="Private Policy" />
              </ListItem>
              <ListItem button dense>
                <ListItemText primary="Terms and Conditions" />
              </ListItem>
            </List>
          </Grid>
          <Grid md={true} xs={12} style={{ marginTop: "1rem" }}>
            <Typography variant="h5" className={classes.listHeading}>
              Socials
            </Typography>
            <Box mt={2} ml={-2}>
              <IconButton>
                <FacebookIcon  />
              </IconButton>
              <IconButton>
                <TwitterIcon  />
              </IconButton>
              <IconButton >
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon  />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
