import React from "react";
import ReactDOM from "react-dom";
import App from "./Router/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import MUImainTheme from "./Theme/MuiTheme";
import mainTheme from "./Theme/MaterialTheme";
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={MUImainTheme}>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
