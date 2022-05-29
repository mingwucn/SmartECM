import React, { useRef } from 'react';
import { ReactSketchCanvas } from "react-sketch-canvas";
import { saveAs } from 'file-saver';

const styles = {
  margin: '10px auto',
  border: ' 2px solid #9c9c9c',
  borderRadius: '0.25px',
};

const Canvas = () => {
  const sketches = useRef()
  const handleSubmit = () => {
    // console.log(sketches.current.exportImage('png'))
    // console.log(sketches)
    sketches.current.exportImage('png').then(
      data => {
        console.log(data);
        // saveAs(data,'draw.png')
      })
      .catch(e => {
        console.log(e);
      });
  }
  const handleReset = () => {
    sketches.current.clearCanvas();
  }

  return (
    <React.Fragment>
      <ReactSketchCanvas
        ref={sketches}
        style={styles}
        width="80%"
        height="400px"
        strokeWidth={6}
        strokeColor="red" />
      <div className='mt-3'>
        <button
          onClick={handleSubmit}
          variant='primary'>Save</button>
        <button
          onClick={handleReset}
          variant='secondary'>Reset</button>
      </div>
    </React.Fragment>
  )
};

export default Canvas;