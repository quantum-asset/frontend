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
      light: "#ff605a",
      main: "#FF1E0A",
      dark: "#ff605a",
      contrastText: "#eeeeee",
    },
    secondary: {
      light: "#51d1f6",
      main: "#20C0F3",
      dark: "#15558D",
      contrastText: "#EDF5E1",
      //contrastText: "#09DCA4",
    },
  },
});
export default mainTheme;