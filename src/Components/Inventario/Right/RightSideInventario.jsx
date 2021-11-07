
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import Title from "../../Title/Title";
import Chart1Inventario from "./Chart1Inventario";
import Chart2Inventario from "./Chart2Inventario";

const RightSideInventario = (props) => {
  const { tomasInventario } = props;
  console.log("tomas INv Charts", tomasInventario);
  const [listMuestreo, setListMuestreo] = useState(undefined);
  const [listNoEsMuestreo, setListNoEsMuestreo] = useState({});
  const init = async (tomasInventario) => {
    let arrMuestreo = [];
    let arrNoMuestreo = [];
    if (tomasInventario && tomasInventario.length > 0) {
      const estadoLabels = [
        "Procesado",
        "Por iniciar",
        "Iniciado",
        "Por procesar",
        "Anulado",
      ];
      let cantidadEstadoData=[0,0,0,0,0];
      for(let i=0;i< tomasInventario.length;i++){
        const curr = tomasInventario[i].TOMA_INVENTARIO;
        switch (curr.POR_PROCESAR) {
          case 0:
            cantidadEstadoData[0] += 1;
            break;
          case 1:
            cantidadEstadoData[1] += 1;
            break;
          case 2:
            cantidadEstadoData[2] += 1;
            break;
          case 3:
            cantidadEstadoData[3] += 1;
            break;
          default:
            cantidadEstadoData[4] += 1;
            break;
        }
      }
 /*      const cantidadEstadoData = tomasInventario.reduce(
        (acum, curr) => {
          console.log("curr ESTADO", curr.TOMA_INVENTARIO.POR_PROCESAR);
          switch (curr.POR_PROCESAR) {
            case 0:
              acum[0] += 1;
              break;
            case 1:
              acum[1] += 1;
              break;
            case 2:
              acum[2] += 1;
              break;
            case 3:
              acum[3] += 1;
              break;
            default:
              acum[4] += 1;
              break;
          }
          return acum;
        },
        [0, 0, 0, 0, 0]
      ); */
      console.log("data Chart Inventario", estadoLabels, cantidadEstadoData);
      setListMuestreo({
        labels: estadoLabels,
        datasets: [
          {
            label: "# de activos por locacion",
            data: cantidadEstadoData,
            backgroundColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 1)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } else {
      const lablesLocaciones = [];
    }
  };

  useEffect(() => {
    if (tomasInventario && tomasInventario.length > 0) {
      init(tomasInventario);
    }
  }, [tomasInventario]);
  return (
    <Fragment>
      <Title subTitle="Resumen de estado de tomas de inventario"/>
      {listMuestreo&& <Chart1Inventario dataChart={listMuestreo} />}

      {/*  <Chart2Inventario dataChart={listNoEsMuestreo}/> */}
    </Fragment>
  );
};
export default RightSideInventario;
