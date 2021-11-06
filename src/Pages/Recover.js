import React, { Fragment, useState, useEffect } from "react";
import MainWrapper from "../Components/MainWrapper/MainWrapper";
import logo from "../Static/logo-h-nb3.png";
import { Button } from "@mui/material";
import "./Recover.scss";
import FormInputText from "../Components/Formulario/FormInputText";
import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import DialogAlert from "../Components/Dialogs/DialogAlert";

const Recover = (props) => {
  console.log("RECOVER", props.match.params.codigo);
  //passwords
  const [idUser, setIdUser] = useState(undefined);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const compare = (psw1, psw2) => {
    return psw1 === psw2;
  };
  const empty = () => {};
  //codigo
  const CODIGO_RECUPERAAICION = props.match.params.codigo;
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const handleStep = (step) => {
    setStep(step);
  };

  const checkCode = async (codigo) => {
    if (codigo) {
      setLoading(true);
      const response = await axios.post("/auth/recover/check", {
        CODIGO: codigo,
      });
      setLoading(false);
      console.log("checked", response.data);
      if (response && response.data && response.data.status === "ok") {
        setIdUser(response.data.payload.ID);
        handleStep(1);
      }
      /*  if (data) {
        handleStep(1);
      } */
    } else {
      console.log("checked", "error");

      //sin codigo le pido email
      //se queda como está en el paso 0
    }
  };
  const handleChangePasswrd1 = (e) => {
    const newValue = e;
    setPassword1(newValue);
    if (!compare(newValue, password2)) {
      setError(true);
    } else if (error) {
      setError(false);
    }
  };
  const handleChangePasswrd2 = (e) => {
    const newValue = e;
    setPassword2(newValue);
    if (!compare(newValue, password1)) {
      setError(true);
    } else if (error) {
      setError(false);
    }
  };
  const cambiarPassword = async () => {
    console.log("error", error);
    console.log("idUser", idUser);
    if (error || !idUser) return;
    setLoading(true);
    const response = await axios.put(`/usuario/${idUser}`, {
      CONTRASENIA: password1,
    });
    console.log("resposne", response);
    setLoading(false);
    if (response.data.status === "success") {
      setStep(2);
    }
  };
  // REQUEST CODE COREEO RECUPERACION

  const [correoRecuperacion, setCorreoRecuperacion] = useState("");
  const handleChangeCorreoRecuperacion = (value) => {
    console.log("val=>", value);
    setCorreoRecuperacion(value);
  };
  const requestRecoveryCode = async () => {
    const { data } = await axios.post("/auth/recover", {
      CORREO: correoRecuperacion,
    });
    const { status, payload, message } = data;
    if (status && status === "ok") {
      setMessage(message);
      setOpenAlert(true);
    } else {
      setMessage(message);
      setOpenAlert(true);
    }
    console.log("respuesta", message);
  };
  useEffect(() => {
    checkCode(CODIGO_RECUPERAAICION);
  }, [CODIGO_RECUPERAAICION]);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10 }}
        open={loading}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
        {"Cargando, por favor espere..."}
      </Backdrop>
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

            {step === 0 ? (
              <Fragment>
                <p>
                  Por favor ingrese el correo electrónico con el que fue
                  registrada su cuenta en Quantum Asset
                </p>

                <FormInputText
                  name="CORREO"
                  onChange={handleChangeCorreoRecuperacion}
                  value={correoRecuperacion}
                  label="Ingrese su correo electrónico"
                  placeholder="Correo"
                  type="email"
                />

                <Button
                  style={{ margin: "18px 2%" }}
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={requestRecoveryCode}
                >
                  Enviar código de recuperación
                </Button>
              </Fragment>
            ) : step === 1 ? (
              <Fragment>
                <p>Por favor ingrese una nueva contraseña para su cuenta</p>

                <FormInputText
                  //name="CORREO"
                  onChange={handleChangePasswrd1}
                  value={password1}
                  label="Ingrese la nueva contraseña"
                  placeholder="Correo"
                  type="password"
                  error={error}
                  helperText={
                    error ? "Las contraseñas no coinciden" : undefined
                  }
                />

                <FormInputText
                  //name="PASSWORD"
                  onChange={handleChangePasswrd2}
                  value={password2}
                  label="Vuelva a ingresar la contraseña"
                  placeholder="Contraseña"
                  type="password"
                  error={error}
                  helperText={
                    error ? "Las contraseñas no coinciden" : undefined
                  }
                />

                <Button
                  style={{ margin: "18px 2%" }}
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={cambiarPassword}
                >
                  Cambiar Contraseña
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <p>Se ha cambiado su contraseña satisfactoriamente</p>
                <Button
                  style={{ margin: "18px 2%" }}
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    props.history.push("/");
                  }}
                >
                  Iniciar ssión
                </Button>
              </Fragment>
            )}
          </div>
        </div>
      </MainWrapper>
      <DialogAlert
        title={"Reestablecimiento de contraseña"}
        open={openAlert}
        message={message}
        onAccept={() => setOpenAlert(false)}
      />
    </Fragment>
  );
};
export default Recover;
