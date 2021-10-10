export const UserMOCK = {
  ID_USUARIO: "CTYVUBIN",
  ID_LOCACION: "6523",
  ID_ROL: "1",
  CORREO: "jin@kamui.com",
  CONTRASENIA: "",
  NOMBRES: "OBITO",
  APELLIDO_PATERNO: "BRAVO",
  APELLIDO_MATERNO: "RAMIREZ",
  TIPO_DOCUMENTO_IDENTIDAD: "DNI",
  NUM_DOCUMENTO_IDENTIDAD: "23877900",
  ROL: "Encargado control de activos",
  LOCACION: "ESTACIÓN CENTRAL",
  PERMISOS: ["GESTION_MAESTROS", "REPORTES", "CONTROL_ACTIVOS"],
};

export const FAKELOGIN = (correo, password) => {
  return new Promise((resolve, reject) => {
    if (
      ["a20122128@pucp.pe", "jenn98@quantum.com", "jin@kamui.com"].includes(
        correo
      ) &&
      ["1234"].includes(password)
    ) {
      //login ok
      setTimeout(() => {
        resolve({
          status: "ok",
          payload: UserMOCK,
          message: "Inicio de sesión correcto",
          timestamp: new Date(),
        });
      }, 1500);
    } else {
      //login not
      setTimeout(() => {
        resolve({
          status: "error",
          payload: {},
          message: "Usuario o contraseña incorrectos",
          timestamp: new Date(),
        });
      }, 1500);
    }
  });
};
