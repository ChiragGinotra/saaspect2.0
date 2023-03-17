import { makeStyles } from "@material-ui/core";
import { letterSpacing } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    width: "100%",
    height: "100%",
  },
  HomePage: {
    [theme.breakpoints.down("xl")]: {
      height: "60rem",
    },
    [theme.breakpoints.down("lg")]: {
      height: "50rem",
    },

    [theme.breakpoints.down("md")]: {
      height: "40rem",
    },

    [theme.breakpoints.down("sm")]: {
      height: "31.25rem",
    },

    [theme.breakpoints.down("xs")]: {
      height: "29.5rem",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  hoverBox: {
    width: "50vw",
    // top: "12%",
    // mt: "13rem",
    display: "flex",
    flexDirection: "column",

    // height: { lg: "30rem", md: "21rem", xs: "6.5rem" },

    // marginTop: { lg: "13rem", md: "7rem", xs: "1.3rem" },
    // marginTop: "45%",
    padding: "2rem 1.5rem 2rem 4.5rem",
    background: " rgba(255, 255, 255, 0.44)",
    position: "absolute",
    [theme.breakpoints.down("xl")]: {
      height: "35rem",
      top: "4rem",
      marginTop: "18rem",
      marginBottom: "5.6rem",
    },
    [theme.breakpoints.down("lg")]: {
      height: "30rem",
      top: "4rem",
      marginTop: "15rem",
      marginBottom: "5.6rem",
    },

    [theme.breakpoints.down("md")]: {
      // height: "21rem",

      // top: "3rem",
      // marginTop: "10rem",
      // marginBottom: "3.1rem",
      height: "25rem",

      top: "3rem",
      marginTop: "12rem",
      marginBottom: "3.1rem",
      padding: "1.5rem 1rem 1.5rem 2.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      // height: "17rem",
      // marginTop: "7rem",
      // marginBottom: "3.1rem",
      height: "21rem",
      top: "3rem",
      marginTop: "9rem",
      marginBottom: "3.1rem",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      height: "6.5rem",
      top: "7rem",
      marginTop: "1.3rem",
      marginBottom: "22rem",
      padding: "0rem 1.5rem 1.5rem ",
      background: "rgba(255, 255, 255, 0.2)",
    },
  },

  // hoverBox: {
  //   width: "50vw",
  //   height: "30.8vh",
  //   mt: "1300%",
  //   mb: 95,
  //   p: [2, 1.5, 2, 4.5],
  //   background: " rgba(255, 255, 255, 0.44)",
  //   position: "absolute",
  // },

  mainImgText: {
    marginBottom: "2rem",
    color: "#301E4E",
    // fontSize: { sx: "", sm: "3.5rem", md: "5rem", lg: "6.2rem", xl: "8rem" },
    fontWeight: 689,
    lineHeight: "9rem",

    letterSpacing: "0.005em",
    position: "relative",

    [theme.breakpoints.down("xl")]: {
      fontSize: "8rem",
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: "7rem",
      lineHeight: "8rem",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "5.3rem",
      lineHeight: "6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
      lineHeight: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.2rem",
      textAlign: "center",
      lineHeight: "3.3rem",
      marginBottom: "0.7rem",
    },
  },

  secondaryImgText: {
    color: "#301E4E",
    fontSize: "3.1rem",
    fontWeight: 400,
    lineHeight: "4rem",

    letterSpacing: "0.005em",
    position: "relative",
    [theme.breakpoints.down("xl")]: {
      fontSize: "3.6rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "3vw",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      lineHeight: "2.9rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      lineHeight: "1.3rem",
      textAlign: "center",
      fontFamily: "Source Sans Pro",
    },
  },

  //card1

  card1: {
    // marginTop: { lg: "15%", md: "10%", sm: "5%" },
    marginLeft: "5%",
    marginRight: "5%",
    fontFamily: ["Playfair Display", "serif"].join(","),
    [theme.breakpoints.down("xl")]: {
      marginTop: "15%",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "20%",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "15%",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5%",
    },

    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "1rem",
    //   lineHeight: "1.3rem",
    //   textAlign: "center",
    //   fontFamily: "Source Sans Pro",
    // },
  },

  card1SmallText: {
    color: "#463366",
    [theme.breakpoints.down("xl")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },

  card1BigText: {
    color: "#463366",
    // fontSize: { lg: "6.1rem", md: "3.8rem", sm: "2.5rem" },

    // marginTop: { lg: "3.25rem", md: "2.5rem", sm: "1.75rem" },
    [theme.breakpoints.down("xl")]: {
      marginTop: "4rem",
      fontSize: "7.5rem",
      fontWeight: 900,
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "3.25rem",
      fontSize: "6.1rem",
      fontWeight: 900,
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "2.5rem",
      fontSize: "3.8rem",
      fontWeight: 700,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "1.75rem",
      fontSize: "2.5rem",
    },
  },

  card1Paragraph: {
    color: "#494949",
    marginTop: "2.25rem",

    [theme.breakpoints.down("xl")]: {
      lineHeight: "3rem",
      fontSize: "2.5rem",
      marginTop: "3rem",
    },
    [theme.breakpoints.down("lg")]: {
      lineHeight: "2.75rem",
      fontSize: "2.2rem",
    },

    [theme.breakpoints.down("md")]: {
      lineHeight: "1.9rem",
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      lineHeight: "1.1rem",
      fontSize: "0.8rem",
      marginTop: "1.5rem",
    },
  },

  card1Button: {
    padding: "1.2rem 3.2rem 1.2rem 3.2rem",
    color: "#ffffff",
    fontFamily: "Source Sans Pro",
    "&:hover": { backgroundColor: "#301E4E" },

    fontWeight: 500,
    backgroundColor: "#301E4E",
    fontSize: "1.3rem",

    [theme.breakpoints.down("xl")]: {
      marginTop: "4rem",
      fontSize: "1.5rem",
    },

    [theme.breakpoints.down("lg")]: {
      marginTop: "3.25rem",
      fontSize: "1.1rem",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "2.5rem",
      fontSize: "0.8rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "1.75rem",
      fontSize: "0.6rem",
    },
  },

  completeQnA: {
    display: "flex",
    padding: "4.5rem 0.6rem 4.5rem 4.5rem",
    backgroundColor: "#301E4E",
    gap: "2.3rem",
    flexDirection: "column",
    fontFamily: ["Playfair Display", "serif"].join(","),
    [theme.breakpoints.down("xl")]: {
      marginTop: "7%",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "10%",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "8%",
      padding: "4rem 0.6rem 4rem 4rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "7%",
      padding: "3.5rem 0.6rem 3.5rem 3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      // flexDirection: "column",
      marginTop: "5%",
      padding: "2.5rem 0.6rem 2.5rem 2.5rem",
    },
  },

  QnaText: {
    color: "#A17FC9",
    fontSize: "6.1rem",
    fontWeight: 689,
    lineHeight: "8.25rem",

    [theme.breakpoints.down("xl")]: {
      fontSize: "7rem",

      lineHeight: "9.5rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "6.1rem",
      fontWeight: 689,
      lineHeight: "8.25rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
      fontWeight: 700,
      lineHeight: "6.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "3.8rem",
      fontWeight: 700,
      lineHeight: "5.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: "3.3rem",
    },
  },

  specialText: {
    color: "#B7364A",
    textDecoration: "underline",
  },
}));

export default useStyles;
