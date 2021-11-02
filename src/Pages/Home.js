import React, { Fragment, useState } from "react";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import logo from "../Static/logo-h-nb3.png";
import { Button } from "@mui/material";
import "./Home.scss";
import ScrollDialog from "../Templates/Dialogs/ScrollDialog";
import FormInputText from "../Components/Formulario/FormInputText";
import { AuthController } from "../Controller/loginController";
import { useUserValue } from "../Context/Sesion";
import { iniciarSesionContext } from "../Context/actions/sesionAction";
import { useBackDropValue } from "../Context/backdrop";
import { Backdrop, CircularProgress } from "@mui/material";

const Home = (props) => {
  //BACKDROP
  const [, dispatchBackdrop] = useBackDropValue();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  // VERIFICACION del CONTEXT
  const [{ auth, usuario }, dispatch] = useUserValue();
  if (auth) {
    const rol = usuario;
    props.history.push(`/encargado-control-activo`);
  }

  //////////////   LOGIN
  const [credenciales, setCredenciales] = useState({
    CORREO: "griskyh@gmail.com",
    PASSWORD: "1234567",
  });
  const [message, setMessage] = useState("");
  const [openDialogNoLogin, setOpenDialogNoLogin] = useState(false);
  const handleChangeCredentials = (value, name) => {
    setCredenciales({ ...credenciales, ...{ [name]: value } });
    console.log("credenciales", { ...credenciales, [name]: value });
  };
  const iniciarSesion = async () => {
    //openBackDropAction(dispatchBackdrop, "Iniciando sesion");
    setOpenBackdrop(true);
    const { success, message, data } = await AuthController.login(
      credenciales.CORREO,
      credenciales.PASSWORD
    );
    setOpenBackdrop(false);

    //closeBackDropAction(dispatchBackdrop);

    if (success) {
      //guardar context y localstorage
      iniciarSesionContext(dispatch, data);
      props.history.push("/encargado-control-activos");
    } else {
      //levanto dialog con mensaje
      setMessage(message);
      setOpenDialogNoLogin(true);
    }

    console.log("Data", success, message, data);
  };

  ////////  CONFIRMACION
  const [openDialogConfirmacion, setOpenDialogConfirmacion] = useState(false);

  ////////RECUPERACION
  const [openDialogRecuperacion, setOpenDialogRecuperacion] = useState(false);
  const [correoRecuperacion, setCorreoRecuperacion] = useState("");

  const handleRecoverPasswordChange = (value) => {
    setCorreoRecuperacion(value);
  };

  const handleRequestRecoverPassword = async () => {
    console.log("Llamada request");
    return;
    const { success, message, data } = await AuthController.login(
      correoRecuperacion
    );
    if (success) {
      //guardar context y localstorage
    } else {
      //levanto dialog con mensaje
      setMessage(message);
      setOpenDialogConfirmacion(true);
    }
    console.log("Data", success, message, data);
  };

  return (
    <Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
        {"Iniciando Sesión"}
      </Backdrop>
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
              name="PASSWORD"
              onChange={handleChangeCredentials}
              value={credenciales.PASSWORD}
              label="Ingrese su contraseña"
              placeholder="Contraseña"
              type="password"
            />

            <button
              className="anchor"
              style={{ alignSelf: "flex-end", margin: "10px 0" }}
              //onClick={handleOpenDialog}
              onClick={() => props.history.push("/recover")}
            >
              Recuperar contraseña
            </button>

            <Button
              style={{ margin: "18px 2%" }}
              color="primary"
              variant="contained"
              fullWidth
              onClick={iniciarSesion}
            >
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </MainWrapper>

      {/**  RECUPERAR CONTTRASEÑA */}
      <ScrollDialog
        open={openDialogRecuperacion}
        // onCancel={() => {}}
        onAccept={handleRequestRecoverPassword}
        onClose={() => setOpenDialogRecuperacion(false)}
        title={"Recuperar contraseña"}
      >
        <FormInputText
          onChange={handleRecoverPasswordChange}
          value={correoRecuperacion}
          label="Ingrese el correo electrónico con el cual fue registrado en Quantum
          Asset para reestablecer su contraseña"
          placeholder="Correo"
        />
      </ScrollDialog>

      {/**  INICIO DE SESION INCORRECTO */}
      <ScrollDialog
        open={openDialogNoLogin}
        onAccept={() => {}}
        onClose={() => setOpenDialogNoLogin(false)}
        title={"Inicio de sesión incorrecto"}
      >
        <h4>{message}</h4>
      </ScrollDialog>

      {/**  CONFIRMACION DE ENVIO DE CORREO CONINSTRUCCIONES */}
      <ScrollDialog
        open={openDialogConfirmacion}
        onAccept={() => props.history.push("/recover")}
        onClose={() => setOpenDialogConfirmacion(false)}
        title={"Resstablecer contraseña"}
      >
        <h4>
          {
            "Se le ha enviado un correo a su cuenta con instrucciones para reestablecer su contraseña"
          }
        </h4>
      </ScrollDialog>
    </Fragment>
  );
};
export default Home;
