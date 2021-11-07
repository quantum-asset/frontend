import React, { useState } from "react";
import "./ChartSummary.scss";
import { Doughnut, Bar, Line } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
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
};

const SuperChartSummary = (props) => {
  // const [dataHorario, setDataHorario] = useState();
  const { dataChart } = props;
  return (
    <div className="main-chart-summary-container">
      {/* <div className="chart-title">Activos por Locacion</div>
 */}
      <div className="chart-chart">
        <Doughnut
          data={dataChart}
          options={{
            legend: { display: true, position: "top" },

            datalabels: {
              display: true,
              color: "white",
            },
            tooltips: {
              backgroundColor: "#5a6e7f",
            },
          }}
        />
      </div>
    </div>
  );
};
export default SuperChartSummary;
