import React, { useContext } from 'react';
import { Chart, registerables } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { ResContext } from '../Predictor';

Chart.register(...registerables);
export default function LinePlot() {
    const {
        LRPdiameter,
        LRPdepth,
        LRPhillDiameter,
        LRPhillHeight,
        LRSdiameter,
        LRSdepth,
        LRShillDiameter,
        LRShillHeight,
        LRCdiameter,
        LRCdepth,
        LRChillDiameter,
        LRChillHeight,
        NNSdiameter,
        NNSdepth,
        NNShillDiameter,
        NNShillHeight,
        NNCdiameter,
        NNCdepth,
        NNChillDiameter,
        NNChillHeight,
        NNPdiameter,
        NNPdepth,
        NNPhillDiameter,
        NNPhillHeight,
        CNCdiameter,
        CNCdepth,
        CNChillDiameter,
        CNChillHeight,
        CNSdiameter,
        CNSdepth,
        CNShillDiameter,
        CNShillHeight,
        stateLRP,
        stateLRS,
        stateLRC,
        stateNNP,
        stateNNS,
        stateNNC,
        stateCNS,
        stateCNC,
    } = useContext(ResContext);
    const data = {
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        // labels : "y",
        datasets: [
            {
                label: "LR  (P) ",
                data: [
                    { x: `${LRPdiameter}` * -0.6, y: 0 },
                    { x: `${LRPdiameter}` * -0.5, y: 0 },
                    { x: `${LRPhillDiameter}` * -0.5, y: `${LRPdepth}` * -1 },
                    { x: 0.0, y: `${LRPhillHeight}` - `${LRPdepth}` },
                    { x: `${LRPhillDiameter}` * 0.5, y: `${LRPdepth}` * -1 },
                    { x: `${LRPdiameter}` * 0.5, y: 0 },
                    { x: `${LRPdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                hidden: !stateLRP,
                // backgroundColor: ,
                borderColor: "#6fb7ff",
                showLine: true,
                tension: 0.3,
            },
            {
                label: "LR  (S) ",
                data: [
                    { x: `${LRSdiameter}` * -0.6, y: 0 },
                    { x: `${LRSdiameter}` * -0.5, y: 0 },
                    { x: `${LRShillDiameter}` * -0.5, y: `${LRSdepth}` * -1 },
                    { x: 0.0, y: `${LRShillHeight}` - `${LRSdepth}` },
                    { x: `${LRShillDiameter}` * 0.5, y: `${LRSdepth}` * -1 },
                    { x: `${LRSdiameter}` * 0.5, y: 0 },
                    { x: `${LRSdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#ff8282",
                showLine: true,
                tension: 0.3,
                hidden: !stateLRS,
            },

            {
                label: "LR  (P+S) ",
                data: [
                    { x: `${LRCdiameter}` * -0.6, y: 0 },
                    { x: `${LRCdiameter}` * -0.5, y: 0 },
                    { x: `${LRChillDiameter}` * -0.5, y: `${LRCdepth}` * -1 },
                    { x: 0.0, y: `${LRChillHeight}` - `${LRCdepth}` },
                    { x: `${LRChillDiameter}` * 0.5, y: `${LRCdepth}` * -1 },
                    { x: `${LRCdiameter}` * 0.5, y: 0 },
                    { x: `${LRCdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#9b37ff",
                showLine: true,
                tension: 0.3,
                hidden: !stateLRC,
            },

            {
                label: "ANN (P)",
                data: [
                    { x: `${NNPdiameter}` * -0.6, y: 0 },
                    { x: `${NNPdiameter}` * -0.5, y: 0 },
                    { x: `${NNPhillDiameter}` * -0.5, y: `${NNPdepth}` * -1 },
                    { x: 0.0, y: `${NNPhillHeight}` - `${NNPdepth}` },
                    { x: `${NNPhillDiameter}` * 0.5, y: `${NNPdepth}` * -1 },
                    { x: `${NNPdiameter}` * 0.5, y: 0 },
                    { x: `${NNPdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#0ec76a",
                showLine: true,
                tension: 0.3,
                hidden: !stateNNP,
            },
            {
                label: "ANN (S)",
                data: [
                    { x: `${NNSdiameter}` * -0.6, y: 0 },
                    { x: `${NNSdiameter}` * -0.5, y: 0 },
                    { x: `${NNShillDiameter}` * -0.5, y: `${NNSdepth}` * -1 },
                    { x: 0.0, y: `${NNShillHeight}` - `${NNSdepth}` },
                    { x: `${NNShillDiameter}` * 0.5, y: `${NNSdepth}` * -1 },
                    { x: `${NNSdiameter}` * 0.5, y: 0 },
                    { x: `${NNSdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#ff4646",
                showLine: true,
                tension: 0.3,
                hidden: !stateNNS,
            },
            {
                label: "ANN (P+S)",
                data: [
                    { x: `${NNCdiameter}` * -0.6, y: 0 },
                    { x: `${NNCdiameter}` * -0.5, y: 0 },
                    { x: `${NNChillDiameter}` * -0.5, y: `${NNCdepth}` * -1 },
                    { x: 0.0, y: `${NNChillHeight}` - `${NNCdepth}` },
                    { x: `${NNChillDiameter}` * 0.5, y: `${NNCdepth}` * -1 },
                    { x: `${NNCdiameter}` * 0.5, y: 0 },
                    { x: `${NNCdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#440088",
                showLine: true,
                tension: 0.3,
                hidden: !stateNNC,
            },
            {
                label: "CNN (S)",
                data: [
                    { x: `${CNSdiameter}` * -0.6, y: 0 },
                    { x: `${CNSdiameter}` * -0.5, y: 0 },
                    { x: `${CNShillDiameter}` * -0.5, y: `${CNSdepth}` * -1 },
                    { x: 0.0, y: `${CNShillHeight}` - `${CNSdepth}` },
                    { x: `${CNShillDiameter}` * 0.5, y: `${CNSdepth}` * -1 },
                    { x: `${CNSdiameter}` * 0.5, y: 0 },
                    { x: `${CNSdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#d900d9",
                showLine: true,
                tension: 0.3,
                hidden: !stateCNS,
            },
            {
                label: "CNN (P+S)",
                data: [
                    { x: `${CNCdiameter}` * -0.6, y: 0 },
                    { x: `${CNCdiameter}` * -0.5, y: 0 },
                    { x: `${CNChillDiameter}` * -0.5, y: `${CNCdepth}` * -1 },
                    { x: 0.0, y: `${CNChillHeight}` - `${CNCdepth}` },
                    { x: `${CNChillDiameter}` * 0.5, y: `${CNCdepth}` * -1 },
                    { x: `${CNCdiameter}` * 0.5, y: 0 },
                    { x: `${CNCdiameter}` * 0.6, y: 0 },
                ],
                // fill: true,
                // backgroundColor: "rgba(255, 128, 192,0.2)",
                borderColor: "#0f0fff",
                showLine: true,
                tension: 0.3,
                hidden: !stateCNC,
            },
            // {
            //     label: "Second dataset",
            //     data: [33, 25, 35, 51, 54, 76],
            //     fill: false,
            //     borderColor: "#742774"
            // }
        ]

    };
    const option = {
        plugins: {
            colorschemes: {
                scheme: 'tableau.Tableau20'
            },
            tooltip: false,
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Y coordinate (μm)',
                    font: {
                        size: 14,
                        weight: "bold"
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'X coordinate (mm)',
                    font: {
                        size: 14,
                        weight: "bold"
                    }
                }
            }
        }
    }


    return (
        <div className="LinePlot" >
            <Scatter
                data={data}
                options={option}
                height="200px"
                width="200px"
            />
        </div >
    );
}