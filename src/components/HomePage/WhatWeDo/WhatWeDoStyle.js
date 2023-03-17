import { makeStyles } from "@material-ui/core";
import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  complete: {
    display: "flex",
    marginLeft: "5%",
    gap: "2.3rem",
    fontFamily: ["Playfair Display", "serif"].join(","),
    [theme.breakpoints.down("xl")]: {
      marginTop: "12%",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "17%",
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

  leftBox: {
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    paddingTop: "5%",

    [theme.breakpoints.down("xl")]: {
      gap: "25px",
    },

    [theme.breakpoints.down("lg")]: {
      gap: "20px",
    },

    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },

    [theme.breakpoints.down("sm")]: {
      gap: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      backgroundColor: "#E7D7F6",
      paddingLeft: "5%",
    },
  },

  imgText1: {
    color: "#301E4E",
    fontWeight: 700,

    [theme.breakpoints.down("xl")]: {
      fontSize: "7.5rem",
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

  imgText2: {
    color: "#0C0525",
    paddingBottom: "1rem",
    paddingRight: "5%",

    [theme.breakpoints.down("xl")]: {
      lineHeight: "3.25rem",
      fontSize: "2.75rem",
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
      lineHeight: "1.6rem",
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: "1.1rem",
      fontSize: "0.8rem",
    },
  },

  rightBox: {
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    // gap: "2.3rem",
    paddingLeft: "10%",

    color: "#301E4E",
    [theme.breakpoints.down("xl")]: {
      gap: "3rem",
    },
    [theme.breakpoints.down("lg")]: {
      gap: "2.3rem",
    },
    [theme.breakpoints.down("md")]: {
      gap: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "6%",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      width: "100vw",
    },
  },

  rightBoxText: {
    [theme.breakpoints.down("xl")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "3.8rem",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "2.1rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: 700,
    },
  },

  button: {
    // padding: "1.2rem 3.2rem 1.2rem 3.2rem",
    color: "#ffffff",
    // width: "9.3rem",
    fontFamily: "Source Sans Pro",
    borderRadius: "8px",
    "&:hover": { backgroundColor: "#301E4E" },

    fontWeight: 500,
    backgroundColor: "#301E4E",
    fontSize: "1.3rem",

    [theme.breakpoints.down("xl")]: {
      // marginTop: "3rem",
      fontSize: "1.4rem",
      width: "11rem",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "2.8rem",
      fontSize: "1.1rem",
      width: "9.3rem",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "1.8rem",
      fontSize: "0.8rem",
      width: "7rem",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "1.2rem",
      fontSize: "0.6rem",
      width: "5rem",
    },
  },
}));

export default useStyles;
