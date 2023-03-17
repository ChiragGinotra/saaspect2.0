import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  completeFooter: {
    display: "flex",
    // flexDirection: "column",
    marginTop: "1%",
    padding: "5rem",
    gap: "5%",

    backgroundColor: "#301E4E",
    // gap: "2.3rem",
    fontFamily: ["Playfair Display", "serif"].join(","),
    [theme.breakpoints.down("xl")]: {
      padding: "6rem",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "5rem",
    },

    [theme.breakpoints.down("md")]: {
      padding: "3.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2.5rem",
      gap: "12%",
    },

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "0.75rem 1rem 1.5rem",
      // gap: "5rem",
    },
  },

  footerLayout: {
    display: "flex",
    // flexDirection: "column",
  },

  logoText: {
    fontSize: "2.1rem",
    color: "#ffffff",
  },

  gridItem: {
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },

  button: {
    // mt: 2,
    backgroundColor: "#301E4E",
    color: "#ffffff",

    fontFamily: ["Playfair Display", "serif"].join(","),
    fontSize: "1rem",
    textTransform: "none",
    textDecoration: "none",
    // textAlign: "center",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.3rem",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
      textAlign: "left",
    },
  },
}));

export default useStyles;
