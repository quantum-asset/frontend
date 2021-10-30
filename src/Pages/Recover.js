import React, { Fragment, useState } from "react";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import logo from "../Static/logo-h-nb3.png";
import { Button } from "@mui/material";
import "./Recover.scss";
import FormInputText from "../Components/Formulario/FormInputText";

const Recover = (props) => {
  console.log("RECOVER", props);
  return (
    <Fragment>
      <MainWrapper>
        <div className="quantum-recover-container">
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
            <h3>Reestablecer contraseña</h3>
            <p>
              Por favor ingrese el codigo que recibió por correo electrónico
            </p>

            <FormInputText
              name="CORREO"
              //onChange={handleChangeCredentials}
              //value={credenciales.CORREO}
              label="Ingrese su correo electrónico"
              placeholder="Correo"
              type="email"
            />

            <FormInputText
              name="PASSWORD"
              //onChange={handleChangeCredentials}
              //value={credenciales.PASSWORD}
              label="Ingrese su contraseña"
              placeholder="Contraseña"
              type="password"
            />

            <button
              className="anchor"
              style={{ alignSelf: "flex-end", margin: "10px 0" }}
              //onClick={handleOpenDialog}
              //onClick={handleOpen}
            >
              Recuperar contraseña
            </button>

            <Button
              style={{ margin: "18px 2%" }}
              color="primary"
              variant="contained"
              fullWidth
             // onClick={iniciarSesion}
            >
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </MainWrapper>
     
    </Fragment>
  );
};
export default Recover;
