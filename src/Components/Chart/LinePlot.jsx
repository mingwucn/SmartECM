import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar, Line, Scatter } from 'react-chartjs-2'



Chart.register(...registerables);
export default function LinePlot(props) {
    const data = {
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        // labels : "y",
        datasets: [
            {
                label: "LR (P)",
                data: [
                    { x: `${props.LRPdiameter}` * -0.6, y: 0 },
                    { x: `${props.LRPdiameter}` * -0.5, y: 0 },
                    { x: `${props.LRPhillDiameter}` * -0.5, y: `${props.LRPdepth}` * -1 },
                    { x: 0.0, y: `${props.LRPhillHeight}` -    `${props.LRPdepth}` },
                    { x: `${props.LRPhillDiameter}` * 0.5, y:  `${props.LRPdepth}` * -1 },
                    { x: `${props.LRPdiameter}` * 0.5, y: 0 },
                    { x: `${props.LRPdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                showLine: true,
                tension: 0.3,
            },
            {
                label: "ANN (P)",
                data: [
                    { x: `${props.NNPdiameter}` * -0.6, y: 0 },
                    { x: `${props.NNPdiameter}` * -0.5, y: 0 },
                    { x: `${props.NNPhillDiameter}` * -0.5, y: `${props.LRPdepth}` * -1 },
                    { x: 0.0, y: `${props.NNPhillHeight}` -    `${props.LRPdepth}` },
                    { x: `${props.NNPhillDiameter}` * 0.5, y:  `${props.LRPdepth}` * -1 },
                    { x: `${props.NNPdiameter}` * 0.5, y: 0 },
                    { x: `${props.NNPdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                backgroundColor: "rgba(255, 128, 192,0.2)" ,
                borderColor: "rgba(255, 128, 192,1)",
                showLine: true,
                tension: 0.3,
            },
            // {
            //     label: "Second dataset",
            //     data: [33, 25, 35, 51, 54, 76],
            //     fill: false,
            //     borderColor: "#742774"
            // }
        ]

    };


    return (
        <div className="App">
            <Scatter data={data} />
        </div>
    );
}