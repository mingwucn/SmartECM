import React, { useState } from 'react';
import SliderLine from './Chart/SliderLine';

const SliderPlot = (props) => {
    return (
        <div>
            <SliderLine
                value={
                    props.value
                }
                minValue={props.minValue}
                maxValue={props.maxValue}
                step={props.step}
            />
        </div>
    )
}

export default SliderPlot