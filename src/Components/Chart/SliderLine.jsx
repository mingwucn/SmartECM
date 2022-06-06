import React, { useContext } from 'react';
import { Chart, registerables } from 'chart.js';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar, Line, Scatter } from 'react-chartjs-2';
import { ResContext } from '../Predictor';

Chart.register(...registerables);
export default function LinePlot(props) {
    const {
        LRPdiameter,
        LRPdepth,
        LRPhillDiameter,
        LRPhillHeight,
        LRSdiameter,
        LRSdepth,
        LRShillDiameter,
        LRShillHeight,
        NNPdiameter,
        NNPdepth,
        NNPhillDiameter,
        NNPhillHeight,
        CNPdiameter,
        CNPdepth,
        CNPhillDiameter,
        CNPhillHeight,
    } = useContext(ResContext);
    const data = {
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        // labels : "y",
        datasets: [
            {
                label: "LR (P)",
                data: [
                    { x: 1, y: props.value[0] },
                    { x: 2, y: props.value[1] },
                    { x: 3, y: props.value[2] },
                    { x: 4, y: props.value[3] },
                    { x: 5, y: props.value[4] },
                    { x: 6, y: props.value[5] },
                    { x: 7, y: props.value[6] },
                    { x: 8, y: props.value[7] },
                    { x: 9, y: props.value[8] },
                    { x: 10, y: props.value[9] },
                    { x: 11, y: props.value[10] },
                    { x: 12, y: props.value[11] },
                    { x: 13, y: props.value[12] },
                    { x: 14, y: props.value[13] },

                ],
                // fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#00366c",
                showLine: true,
                tension: 0.3,
                // {
                //     label: "Second dataset",
                //     data: [33, 25, 35, 51, 54, 76],
                //     fill: false,
                //     borderColor: "#742774"
                // }
            },
        ]
    }

    const option = {
        plugins: {
            legend: {
                display: false,
                position: "right",
                align: "start",
                labels: {
                    usePointStyle: true,
                },
            },
        },

        scales: {
            x: {
                min: 1,
                max: 13,
                ticks: {
                    precision: 1,
                }
            },
            y: {
                min: props.minValue,
                max: props.maxValue,
                ticks: {
                    // precision: 0.001,
                    stepSize: props.step ? props.step : 0.2
                }
            },
        }
    }

    return (
        <div className="linePlot">
            <Scatter
                data={data}
                options={option}
            />
        </div>
    );
}