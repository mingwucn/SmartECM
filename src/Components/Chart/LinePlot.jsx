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
                label: "Predict Profile",
                data: [
                    { x: `${props.diameter}` * -0.6, y: 0 },
                    { x: `${props.diameter}` * -0.5, y: 0 },
                    // {"if":{`${props.diameter}`-`${props.hillDiameter}`>0},},
                    { x: `${props.hillDiameter}` * -0.5, y: `${props.depth}` * -1 },
                    { x: 0.0, y: `${props.hillHeight}` - `${props.depth}` },
                    { x: `${props.hillDiameter}` * 0.5, y: `${props.depth}` * -1 },
                    { x: `${props.diameter}` * 0.5, y: 0 },
                    { x: `${props.diameter}` * 0.6, y: 0 },
                ],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
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