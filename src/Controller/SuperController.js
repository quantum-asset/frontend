import { ResponseController } from "./ResponseController"

export const SuperController=(task,...data)=>{
    if(!task){
        return ResponseController.error("Error al invocar el método");
    }
    const result = await task(...data);
}

