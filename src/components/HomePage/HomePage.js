import React from "react";
import HomeImage from "../../assets/HomeImage.png";
import {
  container,
  Box,
  main,
  ToolBar,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import useStyles from "./HomeStyle";
import WeDo from "./WhatWeDo/WhatWeDo";
import OurWork from "./OurWork/OurWork";
import OurPartners from "./OurPartners/OurPartners";
import Testimonials from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";

const Home = () => {
  const classes = useStyles();

  return (
    <container>
      <div className={classes.HomePage}>
        <Box className={classes.mainImage}>
          <img src={HomeImage} className={classes.img} alt="home-image" />
        </Box>
        <Box className={classes.hoverBox}>
          <Typography variant="h1" className={classes.mainImgText}>
            We are <span style={{ color: "#B7364A" }}>Extensive</span>
          </Typography>
          <Typography variant="h4" className={classes.secondaryImgText}>
            Helping you stand out in a crowded market.
          </Typography>
        </Box>
      </div>

      <Card
        sx={{ boxShadow: "none", border: "none" }}
        className={classes.card1}
      >
        <CardContent>
          <Typography className={classes.card1SmallText} gutterBottom>
            WHO WE ARE
          </Typography>
          <Typography variant="h1" className={classes.card1BigText}>
            We are Extensive.
          </Typography>

          <Typography variant="h6" className={classes.card1Paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            className={classes.card1Button}
          >
            BOOK A FREE MARKETING AUDIT
          </Button>
        </CardActions>
      </Card>

      <WeDo />
      <OurWork />
      <OurPartners />
      <Testimonials />

      <Box className={classes.completeQnA}>
        <Typography className={classes.QnaText}>
          Looking to drive <br /> results?{" "}
          <span className={classes.specialText}>Lets chat</span>
        </Typography>
      </Box>

      <Footer />
    </container>
  );
};

export default Home;
