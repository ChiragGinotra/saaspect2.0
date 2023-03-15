import React from "react";

import {
  container,
  Box,
  main,
  ToolBar,
  Typography,
  CssBaseline,
  Button,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";

import useStyles from "./CardStyle";

const Cards = (props) => {
  const classes = useStyles();

  return (
    <Card
      // sx={{ boxShadow: "none", border: "none" }}
      className={classes.completeCard}
      elevation={0}
    >
      <CardActionArea>
        <CardMedia component="img" image={props.img} alt="green iguana" />
        <CardContent>
          <Typography className={classes.smallText}>
            DIGITAL MARKETING
          </Typography>
          <Typography variant="h2" className={classes.bigText}>
            {props.name}
          </Typography>
          <Typography variant="h6" className={classes.paragraph}>
            Our ad campaign brought 80% footfall to the company
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
