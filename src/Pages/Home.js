import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useUserValue } from "../context/Sesion";
import "./Home.scss";
import logo from "../static/logo-h-nb.png";
const Home = (props) => {
  const [{ usuario, auth }, dispatch] = useUserValue();
  if (auth) {
    console.log("L Usuario", usuario, auth);
    //const move_to = usuario.rol.nombre.toLowerCase();

    // props.history.push("/" + move_to);
    props.history.push("/template");
  }
  return (
    <div className="home-root">
      <div className="logo-background">
        <img
          src={"https://terpel.pe/web/images/terpel2-landing.png"}
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
          //onChange={ingresoDeCorreooo}
          //value={usuarioLogin.email}
        />

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
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          //onChange={handleChangePassword}
          // value={usuarioLogin.password}
        />
        <button
          className="anchor"
          style={{ alignSelf: "flex-end" }}
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
          onClick={() => {props.history.push("/template")}}
        >
          Iniciar Sesion
        </Button>
      </div>
    </div>
  );
};
export default Home;
