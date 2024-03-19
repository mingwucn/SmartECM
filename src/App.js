import React from 'react';
import './App.css';
import BarChart from './Components/Chart/BarChart';
import Canvas from './Components/Draw';
import ProcessingParameters from './Components/ProcessingParameters';
// import TFModel from './Components/tf/TFModel';
import Predictor from './Components/Predictor';

document.title = "ECM predictor"

function App() {
  return (
    <div className="App">
      <Predictor/>
      {/* <ProcessingParameters /> */}
      {/* <Canvas /> */}
      {/* <TFModel /> */}
    </div>
  );
}

export default App;
