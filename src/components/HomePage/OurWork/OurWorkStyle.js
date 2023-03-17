import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  complete: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "2%",
    backgroundColor: "#301E4E",
    // gap: "2.3rem",
    fontFamily: ["Playfair Display", "serif"].join(","),

    [theme.breakpoints.down("xl")]: {
      marginTop: "12%",
    },

    [theme.breakpoints.down("lg")]: {
      marginTop: "15%",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "12%",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "7%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginTop: "5%",
      marginLeft: 0,
    },
  },
  mainHeading: {
    color: "#E2DAEB",
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
      fontSize: "4.2rem",
      lineHeight: "5.7rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "3.8rem",
      lineHeight: "5.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      lineHeight: "3.3rem",
    },
  },

  button: {
    // padding: "1.2rem 3.2rem 1.2rem 3.2rem",
    color: "#ffffff",
    width: "9.3rem",
    height: "4rem",
    fontFamily: "Source Sans Pro",
    marginBottom: "2%",
    borderRadius: "8px",
    "&:hover": { backgroundColor: "#FF6E6C" },

    fontWeight: 500,
    marginTop: "2%",
    backgroundColor: "#FF6E6C",
    fontSize: "1.7rem",
    [theme.breakpoints.down("xl")]: {
      // marginTop: "2.8rem",
      fontSize: "1.4rem",
      width: "11rem",
      height: "5rem",
    },
    [theme.breakpoints.down("lg")]: {
      // marginTop: "2.8rem",
      fontSize: "1.1rem",
      width: "9.3rem",
      height: "4rem",
    },

    [theme.breakpoints.down("md")]: {
      // marginTop: "1.8rem",
      fontSize: "0.8rem",
      width: "7rem",
      height: "3rem",
    },

    [theme.breakpoints.down("sm")]: {
      // marginTop: "1.2rem",
      fontSize: "0.6rem",
      width: "5rem",
      height: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  specialButton: {
    color: "#ffffff",
    borderRadius: "8px",
    height: "2.5rem",
    display: "none",
    margin: "1rem",

    "&:hover": { backgroundColor: "#FF6E6C" },

    fontWeight: 600,
    // marginTop: "2%",
    backgroundColor: "#FF6E6C",
    fontSize: "0.9rem",

    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

export default useStyles;
