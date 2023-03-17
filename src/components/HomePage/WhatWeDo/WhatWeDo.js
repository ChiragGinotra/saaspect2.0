import React from "react";

import {
  container,
  Box,
  main,
  ToolBar,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import Ellipse from "../../../assets/Ellipse.png";
import useStyles from "./WhatWeDoStyle";

const WeDo = () => {
  const classes = useStyles();

  return (
    <container className={classes.complete}>
      <Box className={classes.leftBox}>
        {/* <Ellipse /> */}

        <Typography className={classes.imgText1}>
          WHAT <br />
          WE DO.
        </Typography>
        <Typography className={classes.imgText2}>
          We do lots of stuffs , basically adding value to your product .
        </Typography>
      </Box>

      <Box className={classes.rightBox}>
        <Typography className={classes.rightBoxText}>
          Digital Marketing
        </Typography>
        <Typography className={classes.rightBoxText}>
          Digital Marketing
        </Typography>
        <Typography className={classes.rightBoxText}>
          Digital Marketing
        </Typography>
        <Typography className={classes.rightBoxText}>
          Digital Marketing
        </Typography>
        <Button varient="contained" size="small" className={classes.button}>
          VIEW ALL
        </Button>
      </Box>
    </container>
  );
};

export default WeDo;
