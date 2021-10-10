import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DialogProviderSSJ } from "./context/dialog";
import { UserProvider } from "./context/Sesion";
import {
  EstadoInicialUser,
  EstadoInicialDialog,
  EstadoInicialBackDrop,
} from "./context/estadoInicial";
import openDialogReducer from "./context/reducers/openDialogReducer";
import openBackDropReducer from "./context/reducers/openBackDropReducer";
import axios from "axios";
import sesionReducer from "./context/reducers/sesionReducer";
import { BackDropProvider } from "./context/backdrop";
import { ThemeProvider } from "@material-ui/styles";
import mainTheme from "./Theme/TerpelTheme";
axios.defaults.baseURL = process.env.REACT_APP_MAIN_SERVER;

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={EstadoInicialUser} reducer={sesionReducer}>
      <DialogProviderSSJ
        initialState={EstadoInicialDialog}
        reducer={openDialogReducer}
      >
        <BackDropProvider
          initialState={EstadoInicialBackDrop}
          reducer={openBackDropReducer}
        >
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BackDropProvider>
      </DialogProviderSSJ>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
