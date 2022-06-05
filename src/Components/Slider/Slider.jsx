import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { Scale } from 'chart.js';
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = (props) => {
    const [show, setShow] = React.useState(0)
    useEffect(() => {
        setShow(1);
        (() => setTimeout(() => {
            setShow(0);
        }, 3000))()
    }, [props.value])
    useEffect(() => {
        setShow(0);
    }, [])
    return (
        <div className="sliderContainer">
            <div className='field'>
                <div className='left'>{`${props.minValue}>`}</div>
                <div className='right' >{`<${props.maxValue}`}</div>
                <div className="sliderValue" 
                    style={{
                        color: "#e4e4e4",
                        left: ((props.value - props.minValue) / (props.maxValue - props.minValue)) * 95 - 57 + "%",
                    }}
                >
                    <span style={{
                        transform: `scale(${show})`
                    }}>{props.value}</span>
                </div>
                <input
                    className='sliderInput'
                    type="range" min={props.minValue} max={props.maxValue} steps="0.1"
                    value={props.value}
                    onChange={(e) => props.func(e.target.value)} />
            </div>
        </div>
    )
}

export default Slider