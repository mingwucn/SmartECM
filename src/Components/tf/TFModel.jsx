import React, { useState, useEffect, useLayoutEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import LinePlot from '../Chart/LinePlot';

const TFModel = (props) => {
  const [modelStatus, setModelStatus] = useState("0")

  const [LRSmodel, setLRSModel] = useState("")
  const [LRPmodel, setLRPModel] = useState("")
  const [LRCmodel, setLRCModel] = useState("")
  const [NNSmodel, setNNSModel] = useState("")
  const [NNPmodel, setNNPModel] = useState("")
  const [NNCmodel, setNNCModel] = useState("")
  const [CNSmodel, setCNSModel] = useState("")
  const [CNCmodel, setCNCModel] = useState("")

  const [LRPdiameter, setLRPDiameter] = useState("")
  const [LRPdepth, setLRPDepth] = useState("")
  const [LRPhillDiameter, setLRPHillDiameter] = useState("")
  const [LRPhillHeight, setLRPHillHeight] = useState("")

  const [LRSdiameter, setLRSDiameter] = useState("")
  const [LRSdepth, setLRSDepth] = useState("")
  const [LRShillDiameter, setLRSHillDiameter] = useState("")
  const [LRShillHeight, setLRSHillHeight] = useState("")

  const [NNPdiameter, setNNPDiameter] = useState("")
  const [NNPdepth, setNNPDepth] = useState("")
  const [NNPhillDiameter, setNNPHillDiameter] = useState("")
  const [NNPhillHeight, setNNPHillHeight] = useState("")

  const [CNPdiameter, setCNPDiameter] = useState("")
  const [CNPdepth, setCNPDepth] = useState("")
  const [CNPhillDiameter, setCNPHillDiameter] = useState("")
  const [CNPhillHeight, setCNPHillHeight] = useState("")


  const models = {
    LRS: "https://mingwucn.github.io/MLJson/SmartECM/linear_regression_2_signal/model.json",
    LRP: "https://mingwucn.github.io/MLJson/SmartECM/linear_regression_2_parameters/model.json",
    LRC: "https://mingwucn.github.io/MLJson/SmartECM/linear_regression_2_combine/model.json",
    NNS: "https://mingwucn.github.io/MLJson/SmartECM/NN_2_signal/model.json",
    NNP: "https://mingwucn.github.io/MLJson/SmartECM/NN_2_parameters/model.json",
    NNC: "https://mingwucn.github.io/MLJson/SmartECM/NN_2_combine/model.json",
    CNS: "https://mingwucn.github.io/MLJson/SmartECM/CNN_2_signal/model.json",
    CNC: "https://mingwucn.github.io/MLJson/SmartECM/CNN_2_combine/model.json",
  };

  const mlModelLoader = (models) => {
    // setLRSModel(loadModel(models.LRS))
    setLRPModel(loadModel(models.LRP))
    // setLRCModel(loadModel(models.LRC))
    // setNNSModel(loadModel(models.NNS))
    setNNPModel(loadModel(models.NNP))
    // setNNCModel(loadModel(models.NNC))
    // setCNSModel(loadModel(models.CNS))
    // setCNCModel(loadModel(models.CNC))
  };

  async function loadJson(jsonString) {
    fetch(jsonString)
      .then((response) => response.json())
      .then((messages) => { console.log(messages); });
  }

  async function loadModel(url) {
    console.log('Loading pretrained model from ' + url);
    try {
      const model = await tf.loadLayersModel(url);
      console.log('Done loading pretrained model.');
      return model;
    } catch (err) {
      console.error(err);
      console.log('Loading pretrained model failed.');
    }
  }

  // async function loadMetadata(url) {
  //   try {
  //     const metadataJson = await fetch(url.metadata);
  //     const metadata = await metadataJson.json();
  //     setMetadata(metadata);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  useLayoutEffect(() => {
    tf.ready().then(() => {
      mlModelLoader(models);
    });
  }, []);

  useEffect(() => {
    if (modelStatus < 2) {
      tf.ready().then(() => {
        LRPmodel
          .then(function (res) {
            const prediction = res.predict(tf.tensor([[parseFloat(props.voltage), parseFloat(props.flow) / 100, parseFloat(props.duty), parseFloat(props.pulseOn)]]));
            setLRPDiameter(prediction.arraySync()[0][0])
            setLRPDepth(prediction.arraySync()[0][1])
            setLRPHillDiameter(prediction.arraySync()[0][2])
            setLRPHillHeight(prediction.arraySync()[0][3])
          })
        NNPmodel
          .then(function (res) {
            const prediction = res.predict(tf.tensor([[parseFloat(props.voltage), parseFloat(props.flow) / 100, parseFloat(props.duty), parseFloat(props.pulseOn)]]));
            setNNPDiameter(prediction.arraySync()[0][0])
            setNNPDepth(prediction.arraySync()[0][1])
            setNNPHillDiameter(prediction.arraySync()[0][2])
            setNNPHillHeight(prediction.arraySync()[0][3])
          })
      });
      console.log(modelStatus);
    };
  })


  useEffect(() => {
    if (modelStatus < 3) {
      setModelStatus(parseFloat(modelStatus) + 1);
    };
    tf.ready().then(() => {
      LRPmodel
        .then(function (res) {
          const prediction = res.predict(tf.tensor([[parseFloat(props.voltage), parseFloat(props.flow) / 100, parseFloat(props.duty), parseFloat(props.pulseOn)]]));
          setLRPDiameter(prediction.arraySync()[0][0])
          setLRPDepth(prediction.arraySync()[0][1])
          setLRPHillDiameter(prediction.arraySync()[0][2])
          setLRPHillHeight(prediction.arraySync()[0][3])
          // for (let i = 0; i < res.getWeights().length; i++) {
          //   console.log(res.getWeights()[i].dataSync());
          // }
        });
      NNPmodel
        .then(function (res) {
          const prediction = res.predict(tf.tensor([[parseFloat(props.voltage), parseFloat(props.flow) / 100, parseFloat(props.duty), parseFloat(props.pulseOn)]]));
          setNNPDiameter(prediction.arraySync()[0][0])
          setNNPDepth(prediction.arraySync()[0][1])
          setNNPHillDiameter(prediction.arraySync()[0][2])
          setNNPHillHeight(prediction.arraySync()[0][3])
        }
        )
    })
  }, [props.voltage, props.flow, props.duty, props.pulseOn])

  return (
    <div>
      <LinePlot
        LRPdiameter={LRPdiameter}
        LRPdepth={LRPdepth}
        LRPhillDiameter={LRPhillDiameter}
        LRPhillHeight={LRPhillHeight}
        NNPdiameter={NNPdiameter}
        NNPdepth={NNPdepth}
        NNPhillDiameter={NNPhillDiameter}
        NNPhillHeight={NNPhillHeight}
      />
    </div>
  )
}

export default TFModel