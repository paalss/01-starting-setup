import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((element) => (
        <ChartBar
          key={element.label}
          value={element.value}
          maxValue={totalMaximum}
          label={element.label}
        />
      ))}
    </div>
  );
};

export default Chart;
