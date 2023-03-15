import React from "react";

import { Typography, CssBaseline } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@material-ui/core";

import NavigationItems from "./components/Navigation/NavigationItems";
import Home from "./components/HomePage/HomePage";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair Display", "serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <NavigationItems />
      <Home />
    </ThemeProvider>
  );
};

export default App;
