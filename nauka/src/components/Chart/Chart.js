import React from "react";
import Bar from "./Bar";
const Chart = (props) => {
  return (
    <div>
      {props.dataPoints.map((dataPoint) => (
        <Bar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        ></Bar>
      ))}
    </div>
  );
};

export default Chart;
