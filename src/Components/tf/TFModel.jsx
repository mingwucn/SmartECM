import React, { useState, useEffect, useLayoutEffect, useContext, useMemo, useTransition, Suspense } from 'react';
import * as tf from '@tensorflow/tfjs';
import { DataContext, ParameterContext, ResContext, StateContext } from '../Predictor';

const TFModel = () => {
  const {
    stateLRP,
    stateLRS,
    stateLRC,
    stateNNP,
    stateNNS,
    stateNNC,
    stateCNS,
    stateCNC,
  } = useContext(StateContext)

  const {
    T1A, T2A, T3A, T4A, ECA,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T110,
    T111,
    T112,
    T113,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T210,
    T211,
    T212,
    T213,
    T31,
    T32,
    T33,
    T34,
    T35,
    T36,
    T37,
    T38,
    T39,
    T310,
    T311,
    T312,
    T313,
    T41,
    T42,
    T43,
    T44,
    T45,
    T46,
    T47,
    T48,
    T49,
    T410,
    T411,
    T412,
    T413,
    EC1,
    EC2,
    EC3,
    EC4,
    EC5,
    EC6,
    EC7,
    EC8,
    EC9,
    EC10,
    EC11,
    EC12,
    EC13,

  } = useContext(DataContext);

  const {
    voltage, flow, duty, pulseOn,
  } = useContext(ParameterContext)

  const {
    LRPdiameter, setLRPDiameter,
    LRPdepth, setLRPDepth,
    LRPhillDiameter, setLRPHillDiameter,
    LRPhillHeight, setLRPHillHeight,
    LRSdiameter, setLRSDiameter,
    LRSdepth, setLRSDepth,
    LRShillDiameter, setLRSHillDiameter,
    LRShillHeight, setLRSHillHeight,
    LRCdiameter, setLRCDiameter,
    LRCdepth, setLRCDepth,
    LRChillDiameter, setLRCHillDiameter,
    LRChillHeight, setLRCHillHeight,
    NNPdiameter, setNNPDiameter,
    NNPdepth, setNNPDepth,
    NNPhillDiameter, setNNPHillDiameter,
    NNPhillHeight, setNNPHillHeight,
    NNCdiameter, setNNCDiameter,
    NNCdepth, setNNCDepth,
    NNChillDiameter, setNNCHillDiameter,
    NNChillHeight, setNNCHillHeight,
    NNSdiameter, setNNSDiameter,
    NNSdepth, setNNSDepth,
    NNShillDiameter, setNNSHillDiameter,
    NNShillHeight, setNNSHillHeight,
    CNCdiameter, setCNCDiameter,
    CNCdepth, setCNCDepth,
    CNChillDiameter, setCNCHillDiameter,
    CNChillHeight, setCNCHillHeight,
    CNSdiameter, setCNSDiameter,
    CNSdepth, setCNSDepth,
    CNShillDiameter, setCNSHillDiameter,
    CNShillHeight, setCNSHillHeight,
  } = useContext(ResContext);

  const [modelStatus, setModelStatus] = useState("0")
  const [isPending, startTransition] = useTransition();

  const [LRSmodel, setLRSModel] = useState("")
  const [LRPmodel, setLRPModel] = useState("")
  const [LRCmodel, setLRCModel] = useState("")
  const [NNSmodel, setNNSModel] = useState("")
  const [NNPmodel, setNNPModel] = useState("")
  const [NNCmodel, setNNCModel] = useState("")
  const [CNSmodel, setCNSModel] = useState("")
  const [CNCmodel, setCNCModel] = useState("")

  const models = useMemo(() => {
    return {
      LRS: "https://mingwucn.github.io/MLJson/SmartECM/linear_regression_2_signal/model.json",
      LRP: "https://mingwucn.github.io/MLJson/SmartECM/linear_regression_2_parameters/model.json",
      LRC: "https://mingwucn.github.io/MLJson/SmartECM/linear_regression_2_combine/model.json",
      NNS: "https://mingwucn.github.io/MLJson/SmartECM/NN_2_signal/model.json",
      NNP: "https://mingwucn.github.io/MLJson/SmartECM/NN_2_parameters/model.json",
      NNC: "https://mingwucn.github.io/MLJson/SmartECM/NN_2_combine/model.json",
      CNS: "https://mingwucn.github.io/MLJson/SmartECM/CNN_2_signal/model.json",
      CNC: "https://mingwucn.github.io/MLJson/SmartECM/CNN_2_combine/model.json",

      // LRS: "https://mingwucn.gitee.io/mljson/SmartECM/linear_regression_2_signal/model.json",
      // LRP: "https://mingwucn.gitee.io/mljson/SmartECM/linear_regression_2_parameters/model.json",
      // LRC: "https://mingwucn.gitee.io/mljson/SmartECM/linear_regression_2_combine/model.json",
      // NNS: "https://mingwucn.gitee.io/mljson/SmartECM/NN_2_signal/model.json",
      // NNP: "https://mingwucn.gitee.io/mljson/SmartECM/NN_2_parameters/model.json",
      // NNC: "https://mingwucn.gitee.io/mljson/SmartECM/NN_2_combine/model.json",
      // CNS: "https://mingwucn.gitee.io/mljson/SmartECM/CNN_2_signal/model.json",
      // CNC: "https://mingwucn.gitee.io/mljson/SmartECM/CNN_2_combine/model.json",

    }
  }, []);

  useLayoutEffect(() => {
    startTransition(() => {
      const mlModelLoader = (models) => {
        loadJson(models.LRS)
        setLRSModel(loadModel(models.LRS))
        setLRPModel(loadModel(models.LRP))
        setLRCModel(loadModel(models.LRC))
        setNNSModel(loadModel(models.NNS))
        setNNPModel(loadModel(models.NNP))
        setNNCModel(loadModel(models.NNC))
        setCNSModel(loadModel(models.CNS))
        setCNCModel(loadModel(models.CNC))
      };

      const loadModel =
        async (url) => {
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

      async function loadJson(jsonString) {
        fetch(jsonString,
          {

            headers: {
              'Access-Control-Allow-Origin': "*/*",
              'Content-Type': 'application/json',

              'Accept': '*/*',
              '*User-Agent': 'Thunder Client (https://www.thunderclient.com)',

            },
            method: 'GET',
            mode: 'no-cors',

          })
          .then((response) => response.json())
          .then((messages) => { console.log(messages); });
      }

      tf.ready().then(() => {
        mlModelLoader(models);
      });
    })
  }, []);

  // useEffect(() => {
  //   const inputParameters = tf.tensor([[parseFloat(voltage), parseFloat(flow / 100), parseFloat(duty), parseFloat(pulseOn)]])
  //   if (modelStatus < 3) {
  //     tf.ready().then(() => {
  //       LRPmodel
  //         .then(function (res) {
  //           const prediction = res.predict(inputParameters);
  //           setLRPDiameter(prediction.arraySync()[0][0])
  //           setLRPDepth(prediction.arraySync()[0][1])
  //           setLRPHillDiameter(prediction.arraySync()[0][2])
  //           setLRPHillHeight(prediction.arraySync()[0][3])
  //         })
  //       NNPmodel
  //         .then(function (res) {
  //           const prediction = res.predict(inputParameters);
  //           setNNPDiameter(prediction.arraySync()[0][0])
  //           setNNPDepth(prediction.arraySync()[0][1])
  //           setNNPHillDiameter(prediction.arraySync()[0][2])
  //           setNNPHillHeight(prediction.arraySync()[0][3])
  //         })
  //     });
  //     setModelStatus((modelStatus) + 1);
  //     console.log(modelStatus);
  //   };
  // })


  useEffect(() => {
    startTransition(() => {
      const inputParameters = tf.tensor([[parseFloat(voltage), parseFloat(flow / 100), parseFloat(duty), parseFloat(pulseOn)]])

      if (modelStatus < 5) {
        setModelStatus(parseFloat(modelStatus) + 1);
      };

      tf.ready().then(() => {
        if (stateLRP == 1) {
          LRPmodel
            .then((res) => {
              const prediction = res.predict(inputParameters);
              setLRPDiameter(prediction.arraySync()[0][0])
              setLRPDepth(prediction.arraySync()[0][1])
              setLRPHillDiameter(prediction.arraySync()[0][2])
              setLRPHillHeight(prediction.arraySync()[0][3])
              // for (let i = 0; i < res.getWeights().length; i++) {
              //   console.log(res.getWeights()[i].dataSync());
              // }
            });
        }

        if (stateNNP == 1) {
          NNPmodel
            .then((res) => {
              const prediction = res.predict(inputParameters);
              setNNPDiameter(prediction.arraySync()[0][0])
              setNNPDepth(prediction.arraySync()[0][1])
              setNNPHillDiameter(prediction.arraySync()[0][2])
              setNNPHillHeight(prediction.arraySync()[0][3])
            }
            )
        }
      })
    })
  }, [voltage, flow, duty, pulseOn, stateLRP, stateNNP])

  useEffect(() => {
    startTransition(() => {
      const inputAverage = tf.tensor([[parseFloat(T1A), parseFloat(T2A), parseFloat(T3A), parseFloat(T4A), parseFloat(ECA)]])

      const inputSignals = tf.tensor(
        [
          [parseFloat(T11), parseFloat(T21), parseFloat(T31), parseFloat(T41), parseFloat(EC1)],
          [parseFloat(T12), parseFloat(T22), parseFloat(T32), parseFloat(T42), parseFloat(EC2)],
          [parseFloat(T13), parseFloat(T23), parseFloat(T33), parseFloat(T43), parseFloat(EC3)],
          [parseFloat(T14), parseFloat(T24), parseFloat(T34), parseFloat(T44), parseFloat(EC4)],
          [parseFloat(T15), parseFloat(T25), parseFloat(T35), parseFloat(T45), parseFloat(EC5)],
          [parseFloat(T16), parseFloat(T26), parseFloat(T36), parseFloat(T46), parseFloat(EC6)],
          [parseFloat(T17), parseFloat(T27), parseFloat(T37), parseFloat(T47), parseFloat(EC7)],
          [parseFloat(T18), parseFloat(T28), parseFloat(T38), parseFloat(T48), parseFloat(EC8)],
          [parseFloat(T19), parseFloat(T29), parseFloat(T39), parseFloat(T49), parseFloat(EC9)],
          [parseFloat(T110), parseFloat(T210), parseFloat(T310), parseFloat(T410), parseFloat(EC10)],
          [parseFloat(T111), parseFloat(T211), parseFloat(T311), parseFloat(T411), parseFloat(EC11)],
          [parseFloat(T112), parseFloat(T212), parseFloat(T312), parseFloat(T412), parseFloat(EC12)],
          [parseFloat(T113), parseFloat(T213), parseFloat(T313), parseFloat(T413), parseFloat(EC13)],
        ]).reshape([1, 13, 5, 1]);

      if (modelStatus < 5) {
        setModelStatus(parseFloat(modelStatus) + 1);
      };

      if (stateLRS == 1) {
        tf.ready().then(() => {
          LRSmodel
            .then((res) => {
              const prediction = res.predict(inputAverage);
              setLRSDiameter(prediction.arraySync()[0][0])
              setLRSDepth(prediction.arraySync()[0][1])
              setLRSHillDiameter(prediction.arraySync()[0][2])
              setLRSHillHeight(prediction.arraySync()[0][3])
            })
        })
      };

      if (stateNNS == 1) {
        tf.ready().then(() => {
          NNSmodel
            .then((res) => {
              const prediction = res.predict(inputAverage);
              setNNSDiameter(prediction.arraySync()[0][0])
              setNNSDepth(prediction.arraySync()[0][1])
              setNNSHillDiameter(prediction.arraySync()[0][2])
              setNNSHillHeight(prediction.arraySync()[0][3])
            })
        })
      };

      if (stateCNS == 1) {
        tf.ready().then(() => {
          // console.log(inputSignals.shape);
          CNSmodel
            .then((res) => {
              try {
                const prediction = res.predict(inputSignals)
                // console.log(prediction.arraySync()[0])
                setCNSDiameter(prediction.arraySync()[0][0])
                setCNSDepth(prediction.arraySync()[0][1])
                setCNSHillDiameter(prediction.arraySync()[0][2])
                setCNSHillHeight(prediction.arraySync()[0][3])
                // res.summary()
              } catch (err) {
                console.log(err);
              }
            })
        })
      };
    })

  }, [T1A, T2A, T3A, T4A, ECA, stateNNS, stateLRS, stateCNS])



  useEffect(() => {
    startTransition(() => {
      const inputParameters = tf.tensor([[parseFloat(voltage), parseFloat(flow / 100), parseFloat(duty), parseFloat(pulseOn)]]);

      const inputAverage = tf.tensor([[parseFloat(T1A), parseFloat(T2A), parseFloat(T3A), parseFloat(T4A), parseFloat(ECA)]]);

      const inputCombine = tf.concat([inputParameters, inputAverage], 1);

      const inputSignals = tf.tensor(
        [
          [parseFloat(T11), parseFloat(T21), parseFloat(T31), parseFloat(T41), parseFloat(EC1)],
          [parseFloat(T12), parseFloat(T22), parseFloat(T32), parseFloat(T42), parseFloat(EC2)],
          [parseFloat(T13), parseFloat(T23), parseFloat(T33), parseFloat(T43), parseFloat(EC3)],
          [parseFloat(T14), parseFloat(T24), parseFloat(T34), parseFloat(T44), parseFloat(EC4)],
          [parseFloat(T15), parseFloat(T25), parseFloat(T35), parseFloat(T45), parseFloat(EC5)],
          [parseFloat(T16), parseFloat(T26), parseFloat(T36), parseFloat(T46), parseFloat(EC6)],
          [parseFloat(T17), parseFloat(T27), parseFloat(T37), parseFloat(T47), parseFloat(EC7)],
          [parseFloat(T18), parseFloat(T28), parseFloat(T38), parseFloat(T48), parseFloat(EC8)],
          [parseFloat(T19), parseFloat(T29), parseFloat(T39), parseFloat(T49), parseFloat(EC9)],
          [parseFloat(T110), parseFloat(T210), parseFloat(T310), parseFloat(T410), parseFloat(EC10)],
          [parseFloat(T111), parseFloat(T211), parseFloat(T311), parseFloat(T411), parseFloat(EC11)],
          [parseFloat(T112), parseFloat(T212), parseFloat(T312), parseFloat(T412), parseFloat(EC12)],
          [parseFloat(T113), parseFloat(T213), parseFloat(T313), parseFloat(T413), parseFloat(EC13)],
        ]).reshape([1, 13, 5, 1]);

      if (modelStatus < 5) {
        setModelStatus(parseFloat(modelStatus) + 1);
      };
      if (stateLRC == 1) {
        tf.ready().then(() => {
          LRCmodel
            .then((res) => {
              const prediction = res.predict(inputCombine);
              setLRCDiameter(prediction.arraySync()[0][0])
              setLRCDepth(prediction.arraySync()[0][1])
              setLRCHillDiameter(prediction.arraySync()[0][2])
              setLRCHillHeight(prediction.arraySync()[0][3])
            })
        });
      }

      if (stateNNC == 1) {
        tf.ready().then(() => {
          NNCmodel
            .then((res) => {
              const prediction = res.predict(inputCombine);
              setNNCDiameter(prediction.arraySync()[0][0])
              setNNCDepth(prediction.arraySync()[0][1])
              setNNCHillDiameter(prediction.arraySync()[0][2])
              setNNCHillHeight(prediction.arraySync()[0][3])
            })
        })
      };

      if (stateCNC == 1) {
        tf.ready().then(() => {
          CNCmodel
            .then((res) => {
              try {
                // res.summary()
                const prediction = res.predict([inputSignals, inputParameters])
                // console.log(prediction.arraySync()[0])
                setCNCDiameter(prediction.arraySync()[0][0])
                setCNCDepth(prediction.arraySync()[0][1])
                setCNCHillDiameter(prediction.arraySync()[0][2])
                setCNCHillHeight(prediction.arraySync()[0][3])
              } catch (err) {
                console.log(err);
              }
            })
        })
      }
    })
  }, [voltage, flow, duty, pulseOn, T1A, T2A, T3A, T4A, ECA, stateCNC, stateLRC, stateNNC])


  // return (
  //   <div>
  //     <LinePlot />
  //   </div>
  // )
}

export default TFModel