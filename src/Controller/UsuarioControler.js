import axios from "axios";
import { ResponseController } from "./ResponseController";

export class UsuarioController {
  static list = async () => {
    try {
      const result = await axios.get("/usuario");
      if (!result || !result.data || !result.data.payload) {
        return ResponseController.error(
          "Ocurrio un error de conexión, por favor intentelo denuevo mas tarde. Si el error persiste, contacte al administrador de Quantum Asset"
        );
      }
      const { status, payload, message } = result.data;
      return ResponseController.ok(status, message, payload);
    } catch (error) {
      return ResponseController.error(
        "Ocurrio un error inesperado. Si el error persiste, contacte al administrador de Quantum Asset"
      );
    }
  };
  static getImage = async (ID_ARCHIVO) => {
    try {
      console.log("getImage ", ID_ARCHIVO);
      const result = await axios.get(`/archivo/obtener/${ID_ARCHIVO}`);
      console.log("getImage result", result.data);
      if (!result  ) {
        return ResponseController.error(
          "Ocurrio un error de conexión, por favor intentelo denuevo mas tarde. Si el error persiste, contacte al administrador de Quantum Asset"
        );
      }
      const { status, payload, message } = result.data;

      //const archivo = result.data;
      return ResponseController.ok(status, message, payload);

    } catch (error) {
      console.log("getImage error", error);
      return ResponseController.error(
        "Ocurrio un error inesperado. Si el error persiste, contacte al administrador de Quantum Asset"
      );
    }
  };
  static store = async (data) => {};
  static edit = async (id, data) => {};
}
