import React from "react";
import useStyles from "./OurPartnersStyle";
import F from "../../../assets/F.svg";

import Saas from "../../../assets/Saas.svg";
import V from "../../../assets/V.svg";
import PWA from "../../../assets/PWA.svg";
import Pin from "../../../assets/pintrest.svg";

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
} from "@material-ui/core";

const OurPartners = () => {
  const classes = useStyles();

  return (
    <container className={classes.complete}>
      <Box
        sx={{
          marginBottom: { sm: "1rem", md: "2rem", lg: "3rem", xl: "4rem" },
        }}
      >
        <Typography className={classes.mainHeading}>
          OUR <br />
          Partners.
        </Typography>
        <Typography className={classes.smallText}>
          Your success is our success.
        </Typography>
      </Box>

      <Grid
        container
        spacing={8}
        justify="space-between"
        className={classes.gridContainer}
      >
        <Grid item xs={2} sm={2} md={2}>
          {/* <Image src={Pinterest} width="auto" /> */}
          <img src={Pin} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Pinterest</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={F} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Pinterest</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={PWA} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>PWA</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={Saas} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Saas</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={V} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Pinterest</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={6}
        justify="space-between"
        className={classes.gridContainer}
      >
        <Grid item xs={2} sm={2} md={2}>
          {/* <Image src={Pinterest} width="auto" /> */}
          <img src={Pin} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Pinterest</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={F} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Pinterest</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={PWA} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>PWA</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={Saas} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Saas</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <img src={V} className={classes.PartnersImages} />
          <Typography className={classes.imgText}>Pinterest</Typography>
        </Grid>
      </Grid>
    </container>
  );
};

export default OurPartners;
