import React, { Fragment, useState } from "react";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import logo from "../Static/logo-h-nb3.png";
import { Button, TextField } from "@material-ui/core";
import "./Home.scss";
import ScrollDialog from "../Templates/Dialogs/ScrollDialog";
import FormInputText from "../Components/Formulario/FormInputText";
const Home = (props) => {
  //LOGIN
  const [credenciales, setCredenciales] = useState({
    CORREO: "",
    PASSWORD: "",
  });
  const handleChangeCredentials = (e, name) => {
    setCredenciales({ ...credenciales, ...{ [name]: e.target.value } });
    console.log("credenciales", { ...credenciales, [name]: e.target.value });
  };

  //RECUPERACION
  const [openDialog, setOpenDialog] = useState(false);
  const [correoRecuperacion, setCorreoRecuperacion] = useState("");
  const handleCancel = () => {};
  const handleAccept = () => {};
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleOpen = () => {
    setOpenDialog(true);
  };
  const handleRecoverPasswordChange = (e) => {
    setCorreoRecuperacion(e.target.value);
  };

  return (
    <Fragment>
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
            <FormInputText
              name="CORREO"
              onChange={handleChangeCredentials}
              value={credenciales.CORREO}
              label="Ingrese su correo electrónico"
              placeholder="Correo"
              type="email"
            />

            <FormInputText
              name="contrasenia"
              onChange={handleChangeCredentials}
              value={credenciales.PASSWORD}
              label="Ingrese su contraseña"
              placeholder="Contraseña"
              type="PASSWORD"
            />
            {/* <TextField
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  event.preventDefault();
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
            />

            <TextField
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  event.preventDefault();
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
            /> */}
            <button
              className="anchor"
              style={{ alignSelf: "flex-end", margin: "10px 0" }}
              //onClick={handleOpenDialog}
              onClick={handleOpen}
            >
              Recuperar contraseña
            </button>

            <Button
              style={{ margin: "18px 2%" }}
              color="primary"
              variant="contained"
              fullWidth
              //onClick={iniciarSesion}
              onClick={() => {
                props.history.push("/encargado-control-activos");
              }}
            >
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </MainWrapper>
      <ScrollDialog
        open={openDialog}
        onCancel={handleCancel}
        onAccept={handleAccept}
        onClose={handleClose}
        title={"Recuperar contraseña"}
      >
        <FormInputText
          onChange={handleRecoverPasswordChange}
          value={correoRecuperacion}
          label="Ingrese el correo electrónico con el cual fue registrado en Quantum
          Asset, ya que se le enviará las instrucciones de recuperacion de
          cuenta"
          placeholder="Correo"
        />
      </ScrollDialog>
    </Fragment>
  );
};
export default Home;
