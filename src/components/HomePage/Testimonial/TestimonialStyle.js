import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  complete: {
    display: "flex",
    marginLeft: "5%",
    marginRight: "10%",
    gap: "2.3rem",
    flexDirection: "column",
    fontFamily: ["Playfair Display", "serif"].join(","),
    [theme.breakpoints.down("xl")]: {
      marginTop: "19%",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "17%",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "14%",
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "12%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10%",
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

  outerBox: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "12px",
    display: "flex",
    marginTop: "4%",

    flexDirection: "column",
    padding: "3rem 2rem",
  },

  mainArea: {
    display: "flex",
    gap: "2rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  personAvatar: {
    // width: "10rem",
    // height: "10rem",
    [theme.breakpoints.down("xl")]: {
      width: "12rem",
      height: "12rem",
    },
    [theme.breakpoints.down("lg")]: {
      width: "10rem",
      height: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "8.5rem",
      height: "8.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      width: "7.5rem",
      height: "7.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "7.8rem",
      height: "7.8rem",
      alignSelf: "center",
    },
  },

  mainText: {
    fontSize: "3.8rem",
    color: "#301E4E",
    [theme.breakpoints.down("xl")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "3.8rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },

  smallArea: {
    display: "flex",
    justifyContent: "end",
    gap: "20px",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "start",
    },
  },

  line: {
    height: "0px",
    // marginTop: "5%",
    width: "10rem",
    alignSelf: "center",
    border: "2px solid #301E4E",
    [theme.breakpoints.down("xl")]: {
      width: "12rem",
    },
    [theme.breakpoints.down("lg")]: {
      width: "10rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "1rem",
    },
  },

  descripText: {
    display: "flex",
    flexDirection: "column",
  },

  nameText: {
    fontSize: "3rem",
    color: "#301E4E",
    [theme.breakpoints.down("xl")]: {
      fontSize: "3.8rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },

  secondaryText: {
    fontSize: "1.7rem",
    color: "#FF6E6C",
    [theme.breakpoints.down("xl")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
}));

export default useStyles;
