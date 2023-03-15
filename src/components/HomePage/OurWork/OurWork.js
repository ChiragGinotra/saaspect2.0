import React from "react";

import {
  container,
  Box,
  main,
  ToolBar,
  Typography,
  CssBaseline,
  Button,
  Grid,
} from "@material-ui/core";

import StarBucks from "../../../assets/StarBucks.png";
import Nike from "../../../assets/NikeShoes.png";

import Card from "./Cards/Cards";

import useStyles from "./OurWorkStyle";

const OurWork = () => {
  const classes = useStyles();

  return (
    <container className={classes.complete}>
      <Typography className={classes.mainHeading}>
        OUR <br />
        WORK.
      </Typography>
      <Button varient="contained" size="small" className={classes.button}>
        VIEW ALL
      </Button>

      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={6}>
          <Card name="STARBUCKS" img={StarBucks} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card name="Nike" img={Nike} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card name="Nike" img={Nike} />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card name="STARBUCKS" img={StarBucks} />
        </Grid>
      </Grid>

      <Button varient="contained" className={classes.specialButton}>
        VIEW ALL
      </Button>
    </container>
  );
};

export default OurWork;
