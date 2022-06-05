import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const LoadModel = () => {
  const [model, setModel] = useState("")
  const [metadata, setMetadata] = useState("")

  const url = {
    // model: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
    model: '../../../public/MLmodels/NN_2_signal/model.json',
    metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json'
  };
  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model)
      console.log(url.model)
      setModel(model);
      console.log("set loaded Model");
    } catch (err) {
      console.log(err);
    }
  };
  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
      // loadModel("../../../public/MLmodels/NN_2_signal/model.json");
      console.log(model);
    });
  }, []);

  return (
    <div>url</div>
  )
}

export default LoadModel