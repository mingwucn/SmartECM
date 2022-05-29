import React from 'react';
import './App.css';
import BarChart from './Components/Chart/BarChart';
import Canvas from './Components/Draw';
import InputForm from './Components/InputForm';
import LinePlot from "./Components/Chart/LinePlot"

document.title="ECM predictor"

function App() {
  return (
    <div className="App">
        <InputForm />
        {/* <BarChart /> */}
        {/* <Canvas /> */}
      </div>
  );
}

export default App;
