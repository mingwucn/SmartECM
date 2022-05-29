import React, { useState, useEffect } from 'react';
import Slider from './Slider/Slider';
import BarChart from './Chart/BarChart';
import './InputForm.css';
import LR from './LR';
import LinePlot from './Chart/LinePlot';

function InputForm() {
  const [voltage, setVoltage] = useState(20)
  const [flow, setFlow] = useState(47)
  const [duty, setDuty] = useState(50)
  const [pulseOn, setPulseOn] = useState(10)
  const [diameter, setDiameter] = useState("")
  const [depth, setDepth] = useState("")
  const [hillDiameter, setHillDiameter] = useState("")
  const [hillHeight, setHillHeight] = useState("")
  const [test, setTest] = useState("")

  const calTest = (event) => {
    event.preventDefault();
    if (voltage === 0 || flow === 0 || duty === 0 || pulseOn === 0) {
      alert("Please don't enter 0")
    } else {
      // let test = (voltage * flow);
      var results = LR(voltage, flow / 100, duty, pulseOn)
      // setTest(test.toFixed(2));
      setDiameter(results[0].toFixed(3));
      setDepth(results[1].toFixed(3));
      setHillDiameter(results[2].toFixed(3));
      setHillHeight(results[3].toFixed(3));
    };
  }

  const mlHandler = () => {
    var results = LR(voltage, flow / 100, duty, pulseOn)
    // setTest(test.toFixed(2));
    setDiameter(results[0].toFixed(3));
    setDepth(results[1].toFixed(3));
    setHillDiameter(results[2].toFixed(3));
    setHillHeight(results[3].toFixed(3));
  }

  const reload = () => {
    window.location.reload()
  }

  useEffect(() => {
    mlHandler();
  }, [voltage, duty, flow, pulseOn])

  return (
    <div >
      <div className='predictor'>

        <LinePlot
          diameter={diameter}
          depth={depth}
          hillDiameter={hillDiameter}
          hillHeight={hillHeight}
        />
      </div>
      <div className='container'>
        <h1>ECM Predictor</h1>
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
              minValue={10}
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
              maxValue={75}
              minValue={10}
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
              maxValue={20}
              minValue={5}
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
              maxValue={85}
              minValue={13}
              amplifier={100}
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
        <div className='results'>
          <p>Diameter : {diameter} mm</p>
          <p>Depth : {depth} μm</p>
          <p>Hill diameter : {hillDiameter} mm</p>
          <p>Hill height : {hillHeight} μm</p>
        </div>
      </div>
    </div>
  )
}

export default InputForm