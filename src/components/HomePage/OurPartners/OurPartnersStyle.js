import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  complete: {
    display: "flex",
    marginLeft: "5%",
    gap: "2.3rem",
    flexDirection: "column",
    fontFamily: ["Playfair Display", "serif"].join(","),
    [theme.breakpoints.down("xl")]: {
      marginTop: "12%",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "10%",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "8%",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "7%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginTop: "5%",
    },
  },

  mainHeading: {
    color: "#301E4E",
    fontWeight: 700,

    [theme.breakpoints.down("xl")]: {
      fontSize: "7rem",
      lineHeight: "10rem",
    },

    [theme.breakpoints.down("lg")]: {
      fontSize: "6.1rem",
      lineHeight: "8.25rem",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "3.8rem",
      lineHeight: "5.1rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      lineHeight: "3.3rem",
    },
  },

  smallText: {
    color: "#FF6E6C",
    paddingBottom: "1rem",
    fontFamily: "Source Sans Pro",

    [theme.breakpoints.down("xl")]: {
      lineHeight: "3.5rem",
      fontSize: "3rem",
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
    },
  },

  imgText: {
    [theme.breakpoints.down("xl")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.1rem",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "1.7rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },

  gridContainer: {
    width: "100%",
    // marginTop: { xs: "2rem", sm: "2%", md: "3%", lg: "5rem", xl: "5rem" },
  },

  PartnersImages: {
    // fontSize: "5rem",
    height: "8rem",
    width: "8rem",

    [theme.breakpoints.down("xl")]: {
      height: "10rem",
      width: "10rem",
    },

    [theme.breakpoints.down("lg")]: {
      height: "8rem",
      width: "8rem",
    },

    [theme.breakpoints.down("md")]: {
      height: "6rem",
      width: "6rem",
    },

    [theme.breakpoints.down("sm")]: {
      height: "4rem",
      width: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
  },
}));

export default useStyles;
