import React, { Fragment, useEffect, useState } from "react";
import { LocacionController } from "../../../Controller/LocacionController";
import { NecesidadController } from "../../../Controller/NecesidadTag";
import { TagController } from "../../../Controller/TagController";
import { UsuarioController } from "../../../Controller/UsuarioControler";
import { SuperDate } from "../../../utils/date.utils";
import LeftSideTags from "./Left/LeftSideTags";
import RightSideTags from "./Right/RightSideTags";

const TagsMaestro = (props) => {
  const [tags, setTags] = useState([]);
  //lista de locaciones
  const [locaciones, setLocaciones] = useState([]);
  //lista de Tipos de activo
  const [usuarios, setUsuarios] = useState([]);

  const [necesidadTags, setNecesidadTags] = useState([]);

  const init = async () => {
    //buscar usuarios
    const usuarios = await UsuarioController.list();
    console.log("usuarios", usuarios.data);
    setUsuarios(usuarios.data);

    //buscar locaciones
    const locaciones = await LocacionController.list();
    console.log("locaciones", locaciones.data);
    setLocaciones(locaciones.data);

    //buscar tags
    const tags = await TagController.list();
    console.log("tags", tags.data);
    const semiCompleteListTags = tags.data;
    if (!semiCompleteListTags) {
      setTags([]);
    } else {
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
        )[0];
        if (!usuario) {
          dataTags = [];
          break;
        }
        let USUARIO_2APELLIDO = "-";
        if (usuario.SEGUNDO_APELLIDO.toString() !== "null") {
          USUARIO_2APELLIDO = usuario.SEGUNDO_APELLIDO;
        }

        console.log("USUARIO_2APELLIDO", USUARIO_2APELLIDO);
        console.log("usuario.SEGUNDO_APELLIDO", usuario.SEGUNDO_APELLIDO);
        dataTags.push({
          ...currentTag,
          ...{
            USUARIO_NOMBRES:
              `${usuario.PRIMER_APELLIDO}${USUARIO_2APELLIDO} - ` +
              usuario.NOMBRES,
          },
          ...{
            LOCACION_DENOMINACION: locacion.DENOMINACION,
            LOCACION_DIRECCION: locacion.DIRECCION,
          },
        });
      }

      setTags(dataTags);
    }
    ///buscar necesidad de tags
    const necesidadTags = await NecesidadController.list();
    console.log("necesidad tags", necesidadTags.data);
    const semiCompleteListNecesidadTags = necesidadTags.data;

    if (!semiCompleteListNecesidadTags) {
      setNecesidadTags([]);
    } else {
      let dataNecesidadTags = [];
      for (let i = 0; i < semiCompleteListNecesidadTags.length; i++) {
        const currentNecesidadTag = semiCompleteListNecesidadTags[i];
        const locacion = locaciones.data.filter(
          (x) => x.ID_LOCACION === currentNecesidadTag.ID_LOCACION
        )[0];
        if (!locacion) {
          dataNecesidadTags = [];
          break;
        }
        let nuevaFechaSol = SuperDate.parseDate(
          currentNecesidadTag.FECHA_SOLICITUD
        );
        const { yy, mm, dd } = nuevaFechaSol;
        console.log("nuevaFechaSol", nuevaFechaSol);
        dataNecesidadTags.push({
          ...currentNecesidadTag,
          ...{
            LOCACION: locacion.DENOMINACION,
            NUEVA_FECHA_SOLICITUD: `${yy}/${mm}/${dd}`,
          },
        });
      }
      setNecesidadTags(dataNecesidadTags);
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <Fragment>
      <div className="left-side">
        <LeftSideTags tags={tags} />
      </div>
      <div className="right-side">
        <RightSideTags necesidadTags={necesidadTags} locaciones={locaciones} />
      </div>
    </Fragment>
  );
};
export default TagsMaestro;
