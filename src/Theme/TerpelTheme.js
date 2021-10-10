import { createMuiTheme } from "@material-ui/core";
/* 
export const theme = {
  red1: "#FF1E0A",
  red2: "#ff605a",
  yellow: "#ffe500",
  textColor1: "#67727e",
  textColor2: "#fff",
  grey: "#EAEEF3",
}; */
const mainTheme = createMuiTheme({
  palette: {
    primary: {
      //light: "#861616",
      main: "#861616",
     // dark: "#861616",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#861616",
      main: "#861616",
      dark: "#861616",
      contrastText: "#861616",
      //contrastText: "#09DCA4",
    },
  },
});
export default mainTheme;
