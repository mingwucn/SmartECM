# README for ECM Prediction and Interpretability Project
Real-time web application: https://mingwucn.github.io/SmartECM/

## Overview

This project contains the implementation of machine learning models for real-time prediction and optimization in Electrochemical Machining (ECM). The project emphasizes the interpretability of these models through Explainable AI (XAI) techniques, including SHapley Additive exPlanations (SHAP), Gradient-weighted Class Activation Mapping (Grad-CAM), and a custom linear regression explainer. The codebase is organized to facilitate the training, evaluation, and interpretation of models used to predict cavity profiles based on processing parameters and in-process data.

## Environment Setup

To run the code in this project, the following environment and dependencies are required:

- **Operating System:** Linux/Windows
- **CUDA Version:** 9.0
- **TensorFlow:** 2.0
- **NumPy:** Latest stable version

### Installation Guide

1. **Install CUDA 9.0:**
   - Follow the official CUDA installation guide for your operating system: https://developer.nvidia.com/cuda-90-download-archive

2. **Install TensorFlow 2.0:**
   - With GPU support:
     ```bash
     pip install tensorflow-gpu==2.0.0
     ```
   - Without GPU support:
     ```bash
     pip install tensorflow==2.0.0
     ```

3. **Install NumPy:**
   ```bash
   pip install numpy

## Verifying the Environment

```bash
import tensorflow as tf
import numpy as np

print("TensorFlow version:", tf.__version__)
print("NumPy version:", np.__version__)
print("Is GPU available:", tf.test.is_gpu_available())
```
## Project Structure
The project is organized into the following directories:

/algorithms: Contains the implementations of the interpretability algorithms.

/grad_cam.py: A self-implemented version of the Grad-CAM algorithm for visualizing the focus of convolutional neural networks.
/shap_explainer.py: SHAP implementation for providing global explanations of machine learning models.
/linear_regression_explainer.py: Custom explainer for interpreting linear regression models.
/models: Includes the ML models used in the study.

/logistic_regression.py: Implementation of the logistic regression model.
/neural_network.py: Implementation of the neural network model.
/cnn.py: Implementation of the convolutional neural network (CNN) model.
/data: Placeholder for datasets. 

License
This project is licensed under the MIT License. See the LICENSE file for more details.
