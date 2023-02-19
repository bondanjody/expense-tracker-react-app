import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)  // Mengambil dataPoint value untuk ditentukan nilai maximum nya
    const totalMaxValue = Math.max(...dataPointValues);   // Menentukan maximum value

    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar key={dataPoint.id} value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label}
         />)}
    </div>
}

export default Chart;