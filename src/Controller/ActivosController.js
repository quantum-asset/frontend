import axios from "axios";
import { ResponseController } from "./ResponseController";

export class ActivosController {
  static list = async (idLocacion) => {
    try {
      const result = await axios.get("/activo");
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
  static store = async (data) => {};
  static edit = async (id, data) => {};
}
