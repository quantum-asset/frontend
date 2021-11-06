import React, { Fragment, useEffect, useState } from "react";
import { ActivosController } from "../../../Controller/ActivosController";
import { LocacionController } from "../../../Controller/LocacionController";
import { TagController } from "../../../Controller/TagController";
import { TipoActivoController } from "../../../Controller/TipoActivoController";
import { UsuarioController } from "../../../Controller/UsuarioControler";
import LeftSideTags from "./Left/LeftSideTags";
import RightSideTags from "./Right/RightSideTags";

const TagsMaestro = (props) => {
  const [tags, setTags] = useState([]);
  //lista de locaciones
  const [locaciones, setLocaciones] = useState([]);
  //lista de Tipos de activo
  const [usuarios, setUsuarios] = useState([]);

  const init = async () => {
    const usuarios = await UsuarioController.list();
    console.log("usuarios", usuarios.data);
    setUsuarios(usuarios.data);

    const locaciones = await LocacionController.list();
    console.log("locaciones", locaciones.data);
    setLocaciones(locaciones.data);

    const tags = await TagController.list();
    console.log("tags", tags.data);
    const semiCompleteListTags = tags.data;

    let dataTags = [];
    for (let i = 0; i < semiCompleteListTags.length; i++) {
      const currentTag = semiCompleteListTags[i];
      const locacion = locaciones.data.filter(
        (x) => x.ID_LOCACION === currentTag.ID_LOCACION
      )[0];
      if (!locacion) {
        dataTags = [];
        break;
      }
      const usuario = usuarios.data.filter(
        (x) => x.ID_USUARIO === currentTag.ID_USUARIO
      );
      if (!usuario) {
        dataTags = [];
        break;
      }
      dataTags.push({
        ...currentTag,
        ...{
          USUARIO_NOMBRES: usuario.NOMBRES,
          USUARIO_APELLIDOS: `${usuario.PRIMER_APELLIDO}${
            usuario.PRIMER_APELLIDO ? ` ${usuario.SEGUNDO_APELLIDO}` : ""
          }`,
          ...{
            LOCACION_DENOMINACION: locacion.DENOMINACION,
            LOCACION_DIRECCION: locacion.DIRECCION,
          },
        }
      });
    }

    setTags(dataTags);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <Fragment>
      <div className="left-side">
        <LeftSideTags tags={tags}/>
      </div>
      <div className="right-side">
        <RightSideTags />
      </div>
    </Fragment>
  );
};
export default TagsMaestro;
