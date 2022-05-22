import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BarChart from './Chart/BarChart';
import './InputForm.css';
import LR from './LR';

function InputForm() {
  const [voltage, setVoltage] = useState(20)
  const [flow, setFlow] = useState(0.47)
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
      var results = LR(voltage, flow, duty, pulseOn)
      // setTest(test.toFixed(2));
      setDiameter(results[0].toFixed(3));
      setDepth(results[1].toFixed(3));
      setHillDiameter(results[2].toFixed(3));
      setHillHeight(results[3].toFixed(3));
    };
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className='container'>
      <h1>ECM Profile Predictor</h1>
      <form className='form' onSubmit={calTest}>
        <div>
          <label>Voltage (V)</label>
          <input value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
          />
        </div>
        <div>
          <label>Duty cycle</label>
          <input value={duty}
            onChange={(e) => setDuty(e.target.value)}
          />
        </div>
        <div>
          <label>Pulse on time (ms)</label>
          <input value={pulseOn}
            onChange={(e) => setPulseOn(e.target.value)}
          />
        </div>
        <div>
          <label>Electrolyte flow rate (m/s)</label>
          <input value={flow}
            onChange={(e) => setFlow(e.target.value)}
          />
        </div>
        <div>
          <div className='btn'>
            <Button
              // onClick={handleSubmit}
              variant='primary' type='submit'>Submit</Button>
            <Button
              // onClick={handleReset}
              variant='secondary' onClick={reload}>Reset</Button>
          </div>
        </div>
      </form>
      <div className='results'>
        <p>Diameter : {diameter} mm</p>
        <p>Depth : {depth} μm</p>
        <p>Hill diameter : {hillDiameter} mm</p>
        <p>Hill height : {hillHeight} μm</p>
      </div>
    </div>
  )
}

export default InputForm