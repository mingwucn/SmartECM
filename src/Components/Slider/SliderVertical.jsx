import React, { useState, useEffect, useTransition } from 'react';
import './SliderVertical.css';

const Slider = (props) => {
    const [isPending, startTransition] = useTransition();

    return (
        <div className="sliderVContainer">
            <div className='field'>
                <div className="sliderValue" >
                </div>
                <input
                    className='sliderInput'
                    type="range" min={props.minValue} max={props.maxValue} step={0.1}
                    value={props.value}
                    onChange={(e) => {
                        startTransition(() =>
                            props.func(e.target.value))
                    }} />
            </div>
        </div>
    )
}

export default Slider