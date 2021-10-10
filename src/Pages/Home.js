import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useUserValue } from "../context/Sesion";
import "./Home.scss";
import logo from "../static/logo-h-nb3.png";
import { FAKELOGIN } from "../fakeServer/FAKELOGIN";
import {
  cerrarSesionRedux,
  iniciarSesionRedux,
} from "../context/actions/sesionAction";
const Home = (props) => {
  const [{ usuario, auth }, dispatch] = useUserValue();
  const [usuarioLogin, setUsuariologin] = useState({ email: "jin@kamui.com", password: "1234" });

  if (auth) {
    console.log("L Usuario", usuario, auth,props);
    //const move_to = usuario.rol.nombre.toLowerCase();

    // props.history.push("/" + move_to);
    //props.history.push("/mantenimientos-maestros");

    const { ROL } = usuario;
      switch (ROL) {
        case "Encargado control de activos":
          props.history.push("/encargado-control-activos");
          break;
        case "Encargado registro de activos":
          props.history.push("/encargado-registro-activos");
          break;

        case "Encargado de toma de inventario":
          props.history.push("/encargado-toma-inventario");
          break;

        default: {
          alert(
            "Ocurrio un error al iniciar sesión, o no tiene permisos suficientes. Porfavor contacte al administrador del sistema"
          );
          cerrarSesionRedux(dispatch);
          break;
        }
      }
  }
  const iniciarSesion = async () => {
    const response = await FAKELOGIN(usuarioLogin.email, usuarioLogin.password);
    console.log("respose login", response);
    if (!response || response.status !== "ok") {
      alert(response.message);
    } else {
      alert(response.message);
      iniciarSesionRedux(dispatch, response.payload);
      
      //props.history.push("/mantenimientos-maestros");
    }
  };
  return (
    <div className="home-root">
      <div className="logo-background">
        <img
          src={
            "https://user-images.githubusercontent.com/43678736/135766091-1585f7a5-d5f0-4701-8acb-d179b166e0af.jpg"
          }
          // width="100%"
          alt="logo-login-background"
          className="image-background"
        />
      </div>
      <div className="grey-background"></div>
      <div className="from-container">
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
              iniciarSesion();
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
            setUsuariologin({ ...usuarioLogin, email: e.target.value });
          }}
          value={usuarioLogin.email}
        />

        <TextField
          onKeyUp={(event) => {
            if (event.keyCode === 13) {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              iniciarSesion();
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
            setUsuariologin({ ...usuarioLogin, password: e.target.value });
          }}
          value={usuarioLogin.password}
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
          onClick={iniciarSesion}
        >
          Iniciar Sesion
        </Button>
      </div>
    </div>
  );
};
export default Home;
