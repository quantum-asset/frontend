import React, { Fragment, useEffect, useState } from "react";
import SuperChartSummary from "../../../../Templates/Charts/PieChart/ChartSummary/SuperChartSummary";
const MAX = 19;
const intToRGB = function (value, alpha, max) {
  const valueAsPercentageOfMax = value / max;
  // actual max is 16777215 but represnts white so we will take a max that is
  // below this to avoid white
  const MAX_RGB_INT = 16600000;
  const valueFromMaxRgbInt = Math.floor(MAX_RGB_INT * valueAsPercentageOfMax);

  //credit to https://stackoverflow.com/a/2262117/2737978 for the idea of how to implement
  const blue = Math.floor(valueFromMaxRgbInt % 256);
  const green = Math.floor((valueFromMaxRgbInt / 256) % 256);
  const red = Math.floor((valueFromMaxRgbInt / 256 / 256) % 256);

  return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
};
//////////////////////////////////////////////////////////////////////////////////
///////////////////        COMPONENT       ///////////////
//////////////////////////////////////////////////////////////////////////////////
const ChartAlertaTags = (props) => {
  const { necesidadTags, locaciones } = props;
  const [dataChart, setDataChart] = useState({
    labels: [],
    datasets: [{ label: "Activoooos", data: [] }],
  });

  const init = (necesidadTags = [], locaciones = []) => {
    // const locacionesLabels= locaciones.map(x=>x.DENOMINACION);
    let locacionesLabels = [];
    let cantActivosData = [];
    let backgroundColors = [];
    let borderColors = [];
    for (let i = 0; i < locaciones.length; i++) {
      const currentLocacion = locaciones[i];
      locacionesLabels.push(currentLocacion.DENOMINACION);
      const cantActivos = necesidadTags.reduce((acum, curr) => {
        if (curr.ID_LOCACION === currentLocacion.ID_LOCACION) {
          acum+=curr.CANTIDAD;
        }
        return acum;
      }, 0);
      cantActivosData.push(cantActivos);
      backgroundColors.push(intToRGB(cantActivos * 100000, 0.8, MAX));
      borderColors.push(intToRGB(cantActivos * 1000000, 1, MAX));
    }
    setDataChart({
      labels: locacionesLabels,
      datasets: [
        {
          label: "# de activos por locacion",
          data: cantActivosData,
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
  };
  useEffect(() => {
    init(necesidadTags, locaciones);
  }, [necesidadTags, locaciones]);
  return (
    <Fragment>
      <SuperChartSummary dataChart={dataChart} />
    </Fragment>
  );
};
export default ChartAlertaTags;
