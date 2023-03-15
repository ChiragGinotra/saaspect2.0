// import React from "react";
// import { Typography, AppBar, Toolbar } from "@material-ui/core";
// import { PhotoCamera } from "@material-ui/icons";

// const header = () => {
//   <AppBar position="relative">
//     <Toolbar>
//       <PhotoCamera />
//     </Toolbar>
//   </AppBar>;
// };

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { CssBaseline, Drawer } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// import useStyles from "../HomePage/HomeStyle";
// import { createTheme, ThemeProvider } from "@material-ui/core";
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ["Blog", "Contact", "Work"];
const menu = ["Services", "About Us", "Blogs", "Contact Us"];

//SideBar
const useStyles = makeStyles((theme) => ({
  drawerMenu: {
    color: "#ffffff",
    display: "flex",

    gap: "20px",
    padding: "8rem 0rem 8rem 3rem",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0rem 1rem 3rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 0rem 3rem 3rem",
    },
  },
  drawerText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      lineHeight: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
      lineHeight: "3.3rem",
    },
  },
  drawerButton: {
    [theme.breakpoints.down("sm")]: {
      width: "22.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "14rem",
      fontSize: "0.9rem",
    },
  },
}));

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavigationItems = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const classes = useStyles();
  // const [open, setOpens] = useState(false);

  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["Playfair Display", "serif"].join(","),
  //   },
  // });

  return (
    <Container maxWidth="false" className="classes.root">
      <CssBaseline />
      <Drawer
        id="menu-appbar"
        anchor="right"
        className={classes.drawer}
        // anchorEl={anchorElNav}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "left",
        // }}
        // keepMounted
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "left",
        // }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={{
          sx: {
            display: { xs: "block" },
            width: { xs: "100vw", sm: "50vw", md: "50vw", lg: "40vw" },

            backgroundColor: "#301E4E",
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end" mr="3vw">
          <IconButton
            // size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleCloseNavMenu}
            color="inherit"
            size="large"

            // pr="3vw"
          >
            <CloseRoundedIcon
              sx={{
                fontSize: "180%",

                mt: "20px",

                // mr: "3vw",
                p: "10%",
                backgroundColor: "#E7D7F6",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </Box>
        <Box
          className={classes.drawerMenu}
          display="flex"
          // p={4}
          // mt={5}
          justifyContent="flex-start"
          fontWeight={500}
          backgroundColor="#301E4E"
        >
          {/* <Box mt={2} fontWeight="fontWeightBold">
              Hello
            </Box>
            <Box ml={4} fontSize={14} fontWeight="fontWeightBold">
              miss
            </Box> */}
          {menu.map((menu) => (
            <MenuItem key={menu} onClick={handleCloseNavMenu}>
              <Typography
                className={classes.drawerText}
                sx={{
                  fontFamily: ["Playfair Display", "serif"].join(","),
                  fontSize: { xs: "2.5rem", md: "3rem", lg: "3.8rem" },
                  lineHeight: { xs: "3.3rem", md: "4rem", lg: "5.1rem" },
                  fontWeight: "400",
                }}
              >
                {menu}
              </Typography>
            </MenuItem>
          ))}
          <Button
            variant="contained"
            className={classes.drawerButton}
            disableElevation
            sx={{
              color: "#ffffff",
              width: { xs: "18rem", sm: "18rem", lg: "23rem" },
              height: "4rem",
              fontSize: { xs: "0.9", lg: "1.1rem" },
              mt: "1.6rem",
              lineHeight: "1.5rem",
              backgroundColor: "#FF6E6C",
              borderRadius: "12px",
              // padding: "0.9rem 1.8rem",
              "&:hover": { backgroundColor: "#FF6E6C" },
            }}
          >
            BOOK AN FREE MARKETING ADUIT
          </Button>
        </Box>
      </Drawer>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#1F1235",
          // fontFamily: ["Playfair Display", "serif"].join(","),
        }}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton
                // onClick={handleOpenUserMenu}
                size="large"
                sx={{ ml: "2vw" }}
              >
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <StopRoundedIcon
                  sx={{
                    fill: "#1F1235",
                    fontSize: "200%",
                  }}
                />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>  */}

          <Box sx={{ flexGrow: 0, display: { xs: "flex" }, gap: "3.33vw" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", gap: "3.33vw" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    // mt: 2,
                    color: "#1F1235",
                    backgroundColor: "#ffffff",
                    display: "block",
                    fontFamily: ["Playfair Display", "serif"].join(","),
                    fontSize: "35px",
                    textTransform: "none",
                    textDecoration: "none",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton
              // size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              size="large"
              pr="3vw"
            >
              {/* <MenuIcon /> */}

              <MenuRoundedIcon
                sx={{
                  fontSize: "150%",

                  mr: "3vw",
                  p: "8%",
                  backgroundColor: "pink",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}
            >
              {menu.map((menu) => (
                <MenuItem key={menu} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavigationItems;
