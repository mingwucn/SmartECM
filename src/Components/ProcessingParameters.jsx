import React, { useState, useEffect, useContext } from 'react';
import Slider from './Slider/Slider';
import BarChart from './Chart/BarChart';
import './ProcessingParameters.css';
import LR from './LR';
import LinePlot from './Chart/LinePlot';
import TFModels from './tf/TFModel';
import Signal from './Signal';
import { ParameterContext } from './Predictor';


function ProcessingParameters() {
  // const [toggleState, setToggleState] = useState(1)
  // const [voltage, setVoltage] = useState(20)
  // const [flow, setFlow] = useState(47)
  // const [duty, setDuty] = useState(30)
  // const [pulseOn, setPulseOn] = useState(10)
  // const [diameter, setDiameter] = useState("")
  // const [depth, setDepth] = useState("")
  // const [hillDiameter, setHillDiameter] = useState("")
  // const [hillHeight, setHillHeight] = useState("")
  // const [test, setTest] = useState("")

  const {
    voltage, setVoltage,
    flow, setFlow,
    duty, setDuty,
    pulseOn, setPulseOn
  } = useContext(ParameterContext);

  // const toggleTab = (tabNum) => {
  //   setToggleState(tabNum);
  // }

  const calTest = (event) => {
    // event.preventDefault();
    // if (voltage === 0 || flow === 0 || duty === 0 || pulseOn === 0) {
    //   alert("Please don't enter 0")
    // } else {
    //   // let test = (voltage * flow);
    //   var results = LR(voltage, flow / 100, duty, pulseOn)
    //   // setTest(test.toFixed(2));
    //   setDiameter(results[0].toFixed(3));
    //   setDepth(results[1].toFixed(3));
    //   setHillDiameter(results[2].toFixed(3));
    //   setHillHeight(results[3].toFixed(3));
    // };
  }

  // const mlHandler = () => {
  //   var results = LR(voltage, flow / 100, duty, pulseOn)
  //   // setTest(test.toFixed(2));
  //   setDiameter(results[0].toFixed(3));
  //   setDepth(results[1].toFixed(3));
  //   setHillDiameter(results[2].toFixed(3));
  //   setHillHeight(results[3].toFixed(3));
  // }

  const reload = () => {
    window.location.reload()
  }

  // useEffect(() => {
  //   mlHandler();
  // }, [voltage, duty, flow, pulseOn])

  return (
    <div >
      <div className='predictor'>


        <div className='container-processingParameters'>
          <form className='form' onSubmit={calTest}>
            <div>
              <label>Voltage (V)</label>
              <input
                className='formInput'
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
              />
              <Slider
                value={voltage}
                func={setVoltage}
                maxValue={30}
                minValue={15}
              />
            </div>
            <div>
              <label>Electrolyte flow (cm/s)</label>
              <input
                className='formInput'
                value={flow}
                onChange={(e) => setFlow(e.target.value)}
              />
              <Slider
                value={flow}
                func={setFlow}
                maxValue={95}
                minValue={14}
                amplifier={100}
              />
            </div>
            <div>
              <label>Duty cycle</label>
              <input
                className='formInput'
                value={duty}
                onChange={(e) => setDuty(e.target.value)}
              />
              <Slider
                value={duty}
                func={setDuty}
                maxValue={50}
                minValue={20}
              />
            </div>
            <div>
              <label>Pulse on time (ms)</label>
              <input
                className='formInput'
                value={pulseOn}
                onChange={(e) => setPulseOn(e.target.value)}
              />
              <Slider
                value={pulseOn}
                func={setPulseOn}
                maxValue={25}
                minValue={4}
              />
            </div>



            {/* <div>
          <div className='btn'>
            <button
              // onClick={handleSubmit}
              variant='primary' type='submit'>Submit</button>
            <button
              // onClick={handleReset}
              variant='secondary' onClick={reload}>Reset</button>
          </div>
        </div> */}
          </form>
        </div>
      </div>
    </div>


  )
}

export default ProcessingParameters