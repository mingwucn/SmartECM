import React, { useEffect, useTransition } from 'react';
import './Slider.css';

const Slider = (props) => {
    const [isPending, startTransition] = useTransition();
    const [show, setShow] = useState(0)
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
                        left: ((props.value - props.minValue) / (props.maxValue - props.minValue)) * 94 - 56 + "%",
                    }}
                >
                    <span style={{
                        transform: `scale(${show})`
                    }}>{props.value}</span>
                </div>
                <input
                    className='sliderInput'
                    type="range" min={props.minValue} max={props.maxValue} step="0.5"
                    value={props.value}
                    onChange={(e) => {
                        startTransition(() =>
                            props.func(e.target.value))
                    }
                    } />
            </div>
        </div>
    )
}

export default Slider