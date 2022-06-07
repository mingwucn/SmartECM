import React, { useState, useContext, useEffect } from 'react'
import './Signal.css';
import SliderV from '../Components/Slider/SliderVertical'
import SliderPlot from './SliderPlot';
import { DataContext } from './Predictor';
import * as tf from '@tensorflow/tfjs';

const Signal = () => {
    const {
        T1A, setT1A,
        T11, setT11,
        T12, setT12,
        T13, setT13,
        T14, setT14,
        T15, setT15,
        T16, setT16,
        T17, setT17,
        T18, setT18,
        T19, setT19,
        T110, setT110,
        T111, setT111,
        T112, setT112,
        T113, setT113,
        T2A, setT2A,
        T21, setT21,
        T22, setT22,
        T23, setT23,
        T24, setT24,
        T25, setT25,
        T26, setT26,
        T27, setT27,
        T28, setT28,
        T29, setT29,
        T210, setT210,
        T211, setT211,
        T212, setT212,
        T213, setT213,
        T3A, setT3A,
        T31, setT31,
        T32, setT32,
        T33, setT33,
        T34, setT34,
        T35, setT35,
        T36, setT36,
        T37, setT37,
        T38, setT38,
        T39, setT39,
        T310, setT310,
        T311, setT311,
        T312, setT312,
        T313, setT313,
        T4A, setT4A,
        T41, setT41,
        T42, setT42,
        T43, setT43,
        T44, setT44,
        T45, setT45,
        T46, setT46,
        T47, setT47,
        T48, setT48,
        T49, setT49,
        T410, setT410,
        T411, setT411,
        T412, setT412,
        T413, setT413,
        ECA, setECA,
        EC1, setEC1,
        EC2, setEC2,
        EC3, setEC3,
        EC4, setEC4,
        EC5, setEC5,
        EC6, setEC6,
        EC7, setEC7,
        EC8, setEC8,
        EC9, setEC9,
        EC10, setEC10,
        EC11, setEC11,
        EC12, setEC12,
        EC13, setEC13,
    } = useContext(DataContext);


    useEffect(() => {
        const averageCalculatorT1 = () => {
            setT1A(
                tf.mean([
                    [
                        parseFloat(T11),
                        parseFloat(T12),
                        parseFloat(T13),
                        parseFloat(T14),
                        parseFloat(T15),
                        parseFloat(T16),
                        parseFloat(T17),
                        parseFloat(T18),
                        parseFloat(T19),
                        parseFloat(T110),
                        parseFloat(T111),
                        parseFloat(T112),
                        parseFloat(T113),
                    ]
                ]).dataSync()[0]
            );
        }
        averageCalculatorT1();
    }, [
        T11,
        T12,
        T13,
        T14,
        T15,
        T16,
        T17,
        T18,
        T19,
        T110,
        T111,
        T112,
        T113,
    ]
    )

    useEffect(() => {
        const averageCalculatorT2 = () => {
            setT2A(
                tf.mean([
                    [
                        parseFloat(T21),
                        parseFloat(T22),
                        parseFloat(T23),
                        parseFloat(T24),
                        parseFloat(T25),
                        parseFloat(T26),
                        parseFloat(T27),
                        parseFloat(T28),
                        parseFloat(T29),
                        parseFloat(T210),
                        parseFloat(T211),
                        parseFloat(T212),
                        parseFloat(T213),
                    ]
                ]).dataSync()[0]
            );
        }


        averageCalculatorT2();
    }, [
        T21,
        T22,
        T23,
        T24,
        T25,
        T26,
        T27,
        T28,
        T29,
        T210,
        T211,
        T212,
        T213,
    ]
    )

    useEffect(() => {
        const averageCalculatorT3 = () => {
            setT3A(
                tf.mean([
                    [
                        parseFloat(T31),
                        parseFloat(T32),
                        parseFloat(T33),
                        parseFloat(T34),
                        parseFloat(T35),
                        parseFloat(T36),
                        parseFloat(T37),
                        parseFloat(T38),
                        parseFloat(T39),
                        parseFloat(T310),
                        parseFloat(T311),
                        parseFloat(T312),
                        parseFloat(T313),
                    ]
                ]).dataSync()[0]
            );
        }
        averageCalculatorT3();
    }, [
        T31,
        T32,
        T33,
        T34,
        T35,
        T36,
        T37,
        T38,
        T39,
        T310,
        T311,
        T312,
        T313,
    ]
    )

    useEffect(() => {
        const averageCalculatorT4 = () => {
            setT4A(
                tf.mean([
                    [
                        parseFloat(T41),
                        parseFloat(T42),
                        parseFloat(T43),
                        parseFloat(T44),
                        parseFloat(T45),
                        parseFloat(T46),
                        parseFloat(T47),
                        parseFloat(T48),
                        parseFloat(T49),
                        parseFloat(T410),
                        parseFloat(T411),
                        parseFloat(T412),
                        parseFloat(T413),
                    ]
                ]).dataSync()[0]
            );
        }


        averageCalculatorT4();
    }, [
        T41,
        T42,
        T43,
        T44,
        T45,
        T46,
        T47,
        T48,
        T49,
        T410,
        T411,
        T412,
        T413,
    ]
    )

    useEffect(() => {
        const averageCalculatorEC = () => {
            setECA(
                tf.mean([
                    [
                        parseFloat(EC1),
                        parseFloat(EC2),
                        parseFloat(EC3),
                        parseFloat(EC4),
                        parseFloat(EC5),
                        parseFloat(EC6),
                        parseFloat(EC7),
                        parseFloat(EC8),
                        parseFloat(EC9),
                        parseFloat(EC10),
                        parseFloat(EC11),
                        parseFloat(EC12),
                        parseFloat(EC13),
                    ]
                ]).dataSync()[0]
            );
        }
        averageCalculatorEC();
    }, [
        EC1,
        EC2,
        EC3,
        EC4,
        EC5,
        EC6,
        EC7,
        EC8,
        EC9,
        EC10,
        EC11,
        EC12,
        EC13,
    ]
    )

    const [toggleState, setToggleState] = useState(5);
    const toggleTab = (tabNum) => {
        setToggleState(tabNum);
    }
    const spaceGap = 280 / 12;
    return (
        <div className='container-Signals'>
            <div className='bloc-tabs'>
                <div className={toggleState === 1 ? "tabs tabs-active" : "tabs"}

                    onClick={() => toggleTab(1)}
                >
                    #1
                </div>
                <div className={toggleState === 2 ? "tabs tabs-active" : "tabs"}

                    onClick={() => toggleTab(2)}
                >
                    #2
                </div>
                <div className={toggleState === 3 ? "tabs tabs-active" : "tabs"}

                    onClick={() => toggleTab(3)}
                >
                    #3
                </div>
                <div className={toggleState === 4 ? "tabs tabs-active" : "tabs"}

                    onClick={() => toggleTab(4)}
                >
                    #4
                </div>
                <div className={toggleState === 5 ? "tabs tabs-active" : "tabs"}

                    onClick={() => toggleTab(5)}
                >
                    #5
                </div>
            </div>

            <div className='tabs-contents'>
                <div className={toggleState === 1 ? 'content-active' : "content-silent"}>
                    <h2>Temperature sensor #1 (℃)</h2>
                    <div className='container-sliderV'>
                        <div className='sliderV' style={{ left: `${spaceGap * 0}` + "px" }}>
                            <SliderV
                                value={T11}
                                func={setT11}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 1}` + "px" }}>
                            <SliderV
                                value={T12}
                                func={setT12}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 2}` + "px" }}>
                            <SliderV
                                value={T13}
                                func={setT13}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 3}` + "px" }}>
                            <SliderV
                                value={T14}
                                func={setT14}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 4}` + "px" }}>
                            <SliderV
                                value={T15}
                                func={setT15}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 5}` + "px" }}>
                            <SliderV
                                value={T16}
                                func={setT16}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 6}` + "px" }}>
                            <SliderV
                                value={T17}
                                func={setT17}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 7}` + "px" }}>
                            <SliderV
                                value={T18}
                                func={setT18}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 8}` + "px" }}>
                            <SliderV
                                value={T19}
                                func={setT19}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 9}` + "px" }}>
                            <SliderV
                                value={T110}
                                func={setT110}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 10}` + "px" }}>
                            <SliderV
                                value={T111}
                                func={setT111}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 11}` + "px" }}>
                            <SliderV
                                value={T112}
                                func={setT112}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 12}` + "px" }}>
                            <SliderV
                                value={T113}
                                func={setT113}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>

                    </div>
                    <div className='sliderPlot'>
                        <SliderPlot
                            value={
                                [
                                    T11,
                                    T12,
                                    T13,
                                    T14,
                                    T15,
                                    T16,
                                    T17,
                                    T18,
                                    T19,
                                    T110,
                                    T111,
                                    T112,
                                    T113,
                                ]}
                            maxValue={25}
                            minValue={20}
                        />
                    </div>
                </div>

                <div className={toggleState === 2 ? 'content-active' : "content-silent"}>
                    <h2>Temperature sensor #2 (℃)</h2>
                    <div className='container-sliderV'>
                        <div className='sliderV' style={{ left: `${spaceGap * 0}` + "px" }}>
                            <SliderV
                                value={T21}
                                func={setT21}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 1}` + "px" }}>
                            <SliderV
                                value={T22}
                                func={setT22}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 2}` + "px" }}>
                            <SliderV
                                value={T23}
                                func={setT23}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 3}` + "px" }}>
                            <SliderV
                                value={T24}
                                func={setT24}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 4}` + "px" }}>
                            <SliderV
                                value={T25}
                                func={setT25}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 5}` + "px" }}>
                            <SliderV
                                value={T26}
                                func={setT26}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 6}` + "px" }}>
                            <SliderV
                                value={T27}
                                func={setT27}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 7}` + "px" }}>
                            <SliderV
                                value={T28}
                                func={setT28}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 8}` + "px" }}>
                            <SliderV
                                value={T29}
                                func={setT29}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 9}` + "px" }}>
                            <SliderV
                                value={T210}
                                func={setT210}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 10}` + "px" }}>
                            <SliderV
                                value={T211}
                                func={setT211}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 11}` + "px" }}>
                            <SliderV
                                value={T212}
                                func={setT212}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 12}` + "px" }}>
                            <SliderV
                                value={T213}
                                func={setT213}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>

                    </div>
                    <div className='sliderPlot'>
                        <SliderPlot
                            value={
                                [
                                    T21,
                                    T22,
                                    T23,
                                    T24,
                                    T25,
                                    T26,
                                    T27,
                                    T28,
                                    T29,
                                    T210,
                                    T211,
                                    T212,
                                    T213,
                                ]}
                            maxValue={25}
                            minValue={20}
                        />
                    </div>
                </div>

                <div className={toggleState === 3 ? 'content-active' : "content-silent"}>
                    <h2>Temperature sensor #3 (℃)</h2>
                    <div className='container-sliderV'>
                        <div className='sliderV' style={{ left: `${spaceGap * 0}` + "px" }}>
                            <SliderV
                                value={T31}
                                func={setT31}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 1}` + "px" }}>
                            <SliderV
                                value={T32}
                                func={setT32}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 2}` + "px" }}>
                            <SliderV
                                value={T33}
                                func={setT33}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 3}` + "px" }}>
                            <SliderV
                                value={T34}
                                func={setT34}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 4}` + "px" }}>
                            <SliderV
                                value={T35}
                                func={setT35}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 5}` + "px" }}>
                            <SliderV
                                value={T36}
                                func={setT36}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 6}` + "px" }}>
                            <SliderV
                                value={T37}
                                func={setT37}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 7}` + "px" }}>
                            <SliderV
                                value={T38}
                                func={setT38}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 8}` + "px" }}>
                            <SliderV
                                value={T39}
                                func={setT39}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 9}` + "px" }}>
                            <SliderV
                                value={T310}
                                func={setT310}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 10}` + "px" }}>
                            <SliderV
                                value={T311}
                                func={setT311}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 11}` + "px" }}>
                            <SliderV
                                value={T312}
                                func={setT312}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 12}` + "px" }}>
                            <SliderV
                                value={T313}
                                func={setT313}
                                maxValue={26}
                                minValue={20}
                            />
                        </div>

                    </div>
                    <div className='sliderPlot'>
                        <SliderPlot
                            value={
                                [
                                    T31,
                                    T32,
                                    T33,
                                    T34,
                                    T35,
                                    T36,
                                    T37,
                                    T38,
                                    T39,
                                    T310,
                                    T311,
                                    T312,
                                    T313,
                                ]}
                            maxValue={26}
                            minValue={20}
                        />
                    </div>
                </div>

                <div className={toggleState === 4 ? 'content-active' : "content-silent"}>
                    <h2>Temperature sensor #4 (℃)</h2>
                    <div className='container-sliderV'>
                        <div className='sliderV' style={{ left: `${spaceGap * 0}` + "px" }}>
                            <SliderV
                                value={T41}
                                func={setT41}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 1}` + "px" }}>
                            <SliderV
                                value={T42}
                                func={setT42}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 2}` + "px" }}>
                            <SliderV
                                value={T43}
                                func={setT43}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 3}` + "px" }}>
                            <SliderV
                                value={T44}
                                func={setT44}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 4}` + "px" }}>
                            <SliderV
                                value={T45}
                                func={setT45}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 5}` + "px" }}>
                            <SliderV
                                value={T46}
                                func={setT46}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 6}` + "px" }}>
                            <SliderV
                                value={T47}
                                func={setT47}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 7}` + "px" }}>
                            <SliderV
                                value={T48}
                                func={setT48}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 8}` + "px" }}>
                            <SliderV
                                value={T49}
                                func={setT49}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 9}` + "px" }}>
                            <SliderV
                                value={T410}
                                func={setT410}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 10}` + "px" }}>
                            <SliderV
                                value={T411}
                                func={setT411}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 11}` + "px" }}>
                            <SliderV
                                value={T412}
                                func={setT412}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 12}` + "px" }}>
                            <SliderV
                                value={T413}
                                func={setT413}
                                maxValue={25}
                                minValue={20}
                            />
                        </div>

                    </div>
                    <div className='sliderPlot'>
                        <SliderPlot
                            value={
                                [
                                    T41,
                                    T42,
                                    T43,
                                    T44,
                                    T45,
                                    T46,
                                    T47,
                                    T48,
                                    T49,
                                    T410,
                                    T411,
                                    T412,
                                    T413,
                                ]}
                            maxValue={25}
                            minValue={20}
                        />
                    </div>
                </div>

                <div className={toggleState === 5 ? 'content-active' : "content-silent"}>
                    <h2>Electric current sensor (A)</h2>
                    <div className='container-sliderV'>
                        <div className='sliderV' style={{ left: `${spaceGap * 0}` + "px" }}>
                            <SliderV
                                value={EC1}
                                func={setEC1}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 1}` + "px" }}>
                            <SliderV
                                value={EC2}
                                func={setEC2}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 2}` + "px" }}>
                            <SliderV
                                value={EC3}
                                func={setEC3}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 3}` + "px" }}>
                            <SliderV
                                value={EC4}
                                func={setEC4}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 4}` + "px" }}>
                            <SliderV
                                value={EC5}
                                func={setEC5}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 5}` + "px" }}>
                            <SliderV
                                value={EC6}
                                func={setEC6}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 6}` + "px" }}>
                            <SliderV
                                value={EC7}
                                func={setEC7}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 7}` + "px" }}>
                            <SliderV
                                value={EC8}
                                func={setEC8}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 8}` + "px" }}>
                            <SliderV
                                value={EC9}
                                func={setEC9}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 9}` + "px" }}>
                            <SliderV
                                value={EC10}
                                func={setEC10}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 10}` + "px" }}>
                            <SliderV
                                value={EC11}
                                func={setEC11}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 11}` + "px" }}>
                            <SliderV
                                value={EC12}
                                func={setEC12}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>
                        <div className='sliderV' style={{ left: `${spaceGap * 12}` + "px" }}>
                            <SliderV
                                value={EC13}
                                func={setEC13}
                                maxValue={6}
                                minValue={1}
                            />
                        </div>

                    </div>
                    <div className='sliderPlot'>
                        <SliderPlot
                            value={
                                [
                                    EC1,
                                    EC2,
                                    EC3,
                                    EC4,
                                    EC5,
                                    EC6,
                                    EC7,
                                    EC8,
                                    EC9,
                                    EC10,
                                    EC11,
                                    EC12,
                                    EC13,
                                ]}
                            maxValue={6}
                            minValue={1}
                            step={0.1}
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signal