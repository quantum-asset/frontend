import axios from "axios";
import { ResponseController } from "./ResponseController";
import { makeQuery } from "./utils/utils";

export class LocacionController {
    static list = async (filtros = { filtrosKeys: [], filtrosValues: [] }) => {

    try {
        const { filtrosKeys, filtrosValues } = filtros;
      const result = await axios.get("/locacion"+makeQuery(filtrosKeys, filtrosValues));
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
  static store = async(data) => {};
  static edit = async(id, data) => {};
}
