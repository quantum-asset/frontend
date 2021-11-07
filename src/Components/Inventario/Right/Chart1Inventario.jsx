import React from "react";
import SuperChartSummary from "../../../Templates/Charts/PieChart/ChartSummary/SuperChartSummary";

const Chart1Inventario = (props) => {
  const { dataChart } = props;

  return <SuperChartSummary dataChart={dataChart} />;
};
export default Chart1Inventario;
