import React from "react";
import useStyles from "./TestimonialStyle";

import {
  container,
  Box,
  main,
  ToolBar,
  Typography,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

import person from "../../../assets/person.svg";

const Testimonials = () => {
  const classes = useStyles();

  return (
    <container className={classes.complete}>
      <Typography className={classes.mainHeading}>Testimonials</Typography>

      <Box className={classes.outerBox}>
        <Box className={classes.mainArea}>
          <Avatar
            alt="Person Pic"
            src={person}
            className={classes.personAvatar}
          ></Avatar>
          <Typography className={classes.mainText}>
            “Working with Extensive is great”{" "}
          </Typography>
        </Box>
        <Box className={classes.smallArea}>
          <Box className={classes.line}></Box>
          <Box className={classes.descripText}>
            <Typography className={classes.nameText}>Hershel</Typography>
            <Typography className={classes.secondaryText}>
              Head of director <br />
              GGPL PVT LTD.
            </Typography>
          </Box>
        </Box>
      </Box>
    </container>
  );
};

export default Testimonials;
