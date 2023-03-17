import React from "react";
import useStyles from "./FooterStyle";
import {
  container,
  Box,
  main,
  ToolBar,
  Typography,
  CssBaseline,
  Button,
  Grid,
  Avatar,
  IconButton,
} from "@material-ui/core";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const classes = useStyles();

  return (
    <container className={classes.completeFooter}>
      {/* <Box className="footerLayout" sx={{ display: "flex" }}> */}
      <Box>
        <Typography className={classes.logoText}>Logo</Typography>
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.gridContainer}
      >
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          align="center"
          className={classes.gridItem}
        >
          <Button className={classes.button}>Home Page</Button>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          align="center"
          className={classes.gridItem}
        >
          <Button className={classes.button}>About Us</Button>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          align="center"
          className={classes.gridItem}
        >
          <Button className={classes.button}>Book Audit</Button>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          align="center"
          className={classes.gridItem}
        >
          <Button className={classes.button}>Contact Us</Button>
        </Grid>

        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          align="center"
          className={classes.gridItem}
        >
          <Button className={classes.button}>Our Services</Button>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={2}
          align="center"
          className={classes.gridItem}
        >
          <Button className={classes.button}>Blogs</Button>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex" }}>
        <IconButton>
          <InstagramIcon sx={{ color: "#ffffff" }} />
        </IconButton>
        <IconButton>
          <FacebookOutlinedIcon sx={{ color: "#ffffff" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{ color: "#ffffff" }} />
        </IconButton>
      </Box>
      {/* </Box> */}
    </container>
  );
};

export default Footer;
