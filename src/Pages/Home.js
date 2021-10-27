import React from "react";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import logo from "../Static/logo-h-nb3.png";
import { Button, TextField } from "@material-ui/core";
import "./Home.scss";
const Home = (props) => {
  return (
    <MainWrapper>
      <div className="quantum-home">
        <div className="logo-background">
          <img
            src={
              "https://user-images.githubusercontent.com/43678736/135766091-1585f7a5-d5f0-4701-8acb-d179b166e0af.jpg"
            }
            alt="logo-login-background"
            className="image-background"
          />
        </div>
        <div className="grey-background"></div>
        <div className="form-container">
          <div className="logo-container">
            <img src={logo} width="50%" alt="logo-login" />
          </div>
          <h3>Inicia sesión</h3>
          <TextField
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                //iniciarSesion();
              }
            }}
            fullWidth
            style={{ margin: "2% 0" }}
            id="outlined-email-input"
            label="Usuario"
            type="email"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => {
              // setUsuariologin({ ...usuarioLogin, email: e.target.value });
            }}
            // value={usuarioLogin.email}
          />

          <TextField
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                // iniciarSesion();
              }
            }}
            fullWidth
            style={{ margin: "2% 0" }}
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => {
              //setUsuariologin({ ...usuarioLogin, password: e.target.value });
            }}
            //value={usuarioLogin.password}
          />
          <button
            className="anchor"
            style={{ alignSelf: "flex-end", margin: "10px 0" }}
            //onClick={handleOpenDialog}
            onClick={() => {}}
          >
            Recuperar contraseña
          </button>

          <Button
            style={{ margin: "18px 2%" }}
            color="primary"
            variant="contained"
            fullWidth
            //onClick={iniciarSesion}
            onClick={()=>{
                props.history.push("/encargado-control-activos");
            }}
          >
            Iniciar Sesion
          </Button>
        </div>
      </div>
    </MainWrapper>
  );
};
export default Home;
