import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  completeCard: {
    backgroundColor: "#301E4E",
    marginTop: "5%",
  },

  smallText: {
    color: "#FF6E6C",
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

  bigText: {
    color: "#E7D7F6",
    // fontSize: { lg: "6.1rem", md: "3.8rem", sm: "2.5rem" },

    // marginTop: { lg: "3.25rem", md: "2.5rem", sm: "1.75rem" },

    [theme.breakpoints.down("lg")]: {
      marginTop: "3rem",
      fontSize: "6.1rem",
      fontWeight: 900,
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
      fontSize: "3.8rem",
      fontWeight: 400,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "0.8rem",
      fontSize: "2.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.8rem",
      fontSize: "2rem",
      fontWeight: 700,
    },
  },

  paragraph: {
    color: "#E7D7F6",
    marginTop: "2.25rem",

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
      marginTop: "1rem",
    },
  },
}));

export default useStyles;
