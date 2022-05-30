import React from 'react';
import './App.css';
import BarChart from './Components/Chart/BarChart';
import Canvas from './Components/Draw';
import InputForm from './Components/InputForm';
import TFModel from './Components/tf/TFModel';

document.title = "ECM predictor"

function App() {
  return (
    <div className="App">
      <InputForm />
      {/* <Canvas /> */}
      {/* <TFModel /> */}
    </div>
  );
}

export default App;
