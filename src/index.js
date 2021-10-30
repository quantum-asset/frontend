import React from "react";
import ReactDOM from "react-dom";
import App from "./Router/App";
import reportWebVitals from "./reportWebVitals";
//import { ThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "@mui/material/styles";
import MUImainTheme from "./Theme/MuiTheme";
//import mainTheme from "./Theme/MaterialTheme";
import dotenv from "dotenv";
import axios from "axios";
import { UserProvider } from "./Context/Sesion";
import sesionReducer from "./Context/reducers/sesionReducer";
import {
  EstadoInicialBackDrop,
  EstadoInicialUser,
} from "./Context/estadoInicial";
import { BackDropProvider } from "./Context/backdrop";
import openBackDropReducer from "./Context/reducers/openBackDropReducer";
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_MAIN_SERVER_DEV;
//axios.defaults.baseURL = process.env.REACT_APP_MAIN_SERVER;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MUImainTheme}>
      {/*  <ThemeProvider theme={mainTheme}> */}
      <BackDropProvider
        initialState={EstadoInicialBackDrop}
        reducer={openBackDropReducer}
      >
        <UserProvider initialState={EstadoInicialUser} reducer={sesionReducer}>
          <App />
        </UserProvider>
      </BackDropProvider>

      {/* </ThemeProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
