import React, { useState, createContext, useCallback, useTransition, Suspense } from 'react'
import LinePlot from './Chart/LinePlot';
import ProcessingParameters from './ProcessingParameters'
import TFModels from './tf/TFModel';
import Signal from './Signal';
import './Predictor.css'

export const DataContext = createContext(null);

export const ParameterContext = createContext(null);

export const StateContext = createContext(null);

export const ResContext = createContext(null);




const ECMPredictor = () => {
    const [isPending, startTransition] = useTransition();
    const [toggleState, setToggleState] = useState(2)
    const [stateLRP, setStateLRP] = useState(0)
    const [stateLRS, setStateLRS] = useState(0)
    const [stateLRC, setStateLRC] = useState(0)

    const [stateNNP, setStateNNP] = useState(0)
    const [stateNNS, setStateNNS] = useState(0)
    const [stateNNC, setStateNNC] = useState(1)

    const [stateCNS, setStateCNS] = useState(0)
    const [stateCNC, setStateCNC] = useState(1)

    const [voltage, setVoltage] = useState(25)
    const [flow, setFlow] = useState(47)
    const [duty, setDuty] = useState(30)
    const [pulseOn, setPulseOn] = useState(6)

    const [T1A, setT1A] = useState(1);
    const [T11, setT11] = useState(22.58);
    const [T12, setT12] = useState(22.58);
    const [T13, setT13] = useState(22.6);
    const [T14, setT14] = useState(22.58);
    const [T15, setT15] = useState(22.58);
    const [T16, setT16] = useState(22.57);
    const [T17, setT17] = useState(22.59);
    const [T18, setT18] = useState(22.60);
    const [T19, setT19] = useState(22.61);
    const [T110, setT110] = useState(22.58);
    const [T111, setT111] = useState(22.59);
    const [T112, setT112] = useState(22.58);
    const [T113, setT113] = useState(22.60);

    const [T2A, setT2A] = useState(21.97);
    const [T21, setT21] = useState(21.97);
    const [T22, setT22] = useState(21.98);
    const [T23, setT23] = useState(22.98);
    const [T24, setT24] = useState(22.00);
    const [T25, setT25] = useState(21.05);
    const [T26, setT26] = useState(21.99);
    const [T27, setT27] = useState(22.95);
    const [T28, setT28] = useState(22.00);
    const [T29, setT29] = useState(21.06);
    const [T210, setT210] = useState(21.95);
    const [T211, setT211] = useState(21.98);
    const [T212, setT212] = useState(22.08);
    const [T213, setT213] = useState(22.16);
    const [T3A, setT3A] = useState(1);
    const [T31, setT31] = useState(24.80);
    const [T32, setT32] = useState(24.68);
    const [T33, setT33] = useState(24.79);
    const [T34, setT34] = useState(24.89);
    const [T35, setT35] = useState(24.89);
    const [T36, setT36] = useState(24.77);
    const [T37, setT37] = useState(25.07);
    const [T38, setT38] = useState(24.98);
    const [T39, setT39] = useState(24.85);
    const [T310, setT310] = useState(24.82);
    const [T311, setT311] = useState(24.57);
    const [T312, setT312] = useState(24.68);
    const [T313, setT313] = useState(24.86);

    const [T4A, setT4A] = useState(1);
    const [T41, setT41] = useState(22.98);
    const [T42, setT42] = useState(24.34);
    const [T43, setT43] = useState(24.66);
    const [T44, setT44] = useState(24.12);
    const [T45, setT45] = useState(23.89);
    const [T46, setT46] = useState(21.03);
    const [T47, setT47] = useState(20.86);
    const [T48, setT48] = useState(23.87);
    const [T49, setT49] = useState(23.63);
    const [T410, setT410] = useState(20.97);
    const [T411, setT411] = useState(22.16);
    const [T412, setT412] = useState(23.51);
    const [T413, setT413] = useState(23.66);

    const [ECA, setECA] = useState(2.26);
    const [EC1, setEC1] = useState(2.26);
    const [EC2, setEC2] = useState(2.25);
    const [EC3, setEC3] = useState(2.23);
    const [EC4, setEC4] = useState(2.17);
    const [EC5, setEC5] = useState(2.14);
    const [EC6, setEC6] = useState(2.08);
    const [EC7, setEC7] = useState(2.11);
    const [EC8, setEC8] = useState(2.12);
    const [EC9, setEC9] = useState(2.10);
    const [EC10, setEC10] = useState(2.40);
    const [EC11, setEC11] = useState(2.39);
    const [EC12, setEC12] = useState(1.96);
    const [EC13, setEC13] = useState(2.06);

    const [LRPdiameter, setLRPDiameter] = useState("")
    const [LRPdepth, setLRPDepth] = useState("")
    const [LRPhillDiameter, setLRPHillDiameter] = useState("")
    const [LRPhillHeight, setLRPHillHeight] = useState("")

    const [LRSdiameter, setLRSDiameter] = useState("")
    const [LRSdepth, setLRSDepth] = useState("")
    const [LRShillDiameter, setLRSHillDiameter] = useState("")
    const [LRShillHeight, setLRSHillHeight] = useState("")

    const [LRCdiameter, setLRCDiameter] = useState("")
    const [LRCdepth, setLRCDepth] = useState("")
    const [LRChillDiameter, setLRCHillDiameter] = useState("")
    const [LRChillHeight, setLRCHillHeight] = useState("")

    const [NNPdiameter, setNNPDiameter] = useState("")
    const [NNPdepth, setNNPDepth] = useState("")
    const [NNPhillDiameter, setNNPHillDiameter] = useState("")
    const [NNPhillHeight, setNNPHillHeight] = useState("")
    const [NNCdiameter, setNNCDiameter] = useState("")
    const [NNCdepth, setNNCDepth] = useState("")
    const [NNChillDiameter, setNNCHillDiameter] = useState("")
    const [NNChillHeight, setNNCHillHeight] = useState("")

    const [NNSdiameter, setNNSDiameter] = useState("")
    const [NNSdepth, setNNSDepth] = useState("")
    const [NNShillDiameter, setNNSHillDiameter] = useState("")
    const [NNShillHeight, setNNSHillHeight] = useState("")

    const [CNSdiameter, setCNSDiameter] = useState("")
    const [CNSdepth, setCNSDepth] = useState("")
    const [CNShillDiameter, setCNSHillDiameter] = useState("")
    const [CNShillHeight, setCNSHillHeight] = useState("")
    const [CNCdiameter, setCNCDiameter] = useState("")
    const [CNCdepth, setCNCDepth] = useState("")
    const [CNChillDiameter, setCNCHillDiameter] = useState("")
    const [CNChillHeight, setCNCHillHeight] = useState("")


    const toggleTab = useCallback(
        (tabNum) => {
            setToggleState(tabNum);
        }, [toggleState])

    return (
        <StateContext.Provider value={{
            stateLRP, setStateLRP,
            stateLRS, setStateLRS,
            stateLRC, setStateLRC,
            stateNNP, setStateNNP,
            stateNNS, setStateNNS,
            stateNNC, setStateNNC,
            stateCNS, setStateCNS,
            stateCNC, setStateCNC,
        }}>

            <ParameterContext.Provider value={{
                voltage, setVoltage,
                flow, setFlow,
                duty, setDuty,
                pulseOn, setPulseOn,
            }}>

                <DataContext.Provider value={{
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

                }}>

                    <ResContext.Provider value={{
                        LRPdiameter, setLRPDiameter,
                        LRPdepth, setLRPDepth,
                        LRPhillDiameter, setLRPHillDiameter,
                        LRPhillHeight, setLRPHillHeight,
                        LRSdiameter, setLRSDiameter,
                        LRSdepth, setLRSDepth,
                        LRShillDiameter, setLRSHillDiameter,
                        LRShillHeight, setLRSHillHeight,
                        LRCdiameter, setLRCDiameter,
                        LRCdepth, setLRCDepth,
                        LRChillDiameter, setLRCHillDiameter,
                        LRChillHeight, setLRCHillHeight,
                        NNPdiameter, setNNPDiameter,
                        NNPdepth, setNNPDepth,
                        NNPhillDiameter, setNNPHillDiameter,
                        NNPhillHeight, setNNPHillHeight,
                        NNCdiameter, setNNCDiameter,
                        NNCdepth, setNNCDepth,
                        NNChillDiameter, setNNCHillDiameter,
                        NNChillHeight, setNNCHillHeight,
                        NNSdiameter, setNNSDiameter,
                        NNSdepth, setNNSDepth,
                        NNShillDiameter, setNNSHillDiameter,
                        NNShillHeight, setNNSHillHeight,
                        CNCdiameter, setCNCDiameter,
                        CNCdepth, setCNCDepth,
                        CNChillDiameter, setCNCHillDiameter,
                        CNChillHeight, setCNCHillHeight,
                        CNSdiameter, setCNSDiameter,
                        CNSdepth, setCNSDepth,
                        CNShillDiameter, setCNSHillDiameter,
                        CNShillHeight, setCNSHillHeight,
                        stateLRP, setStateLRP,
                        stateLRS, setStateLRS,
                        stateLRC, setStateLRC,
                        stateNNP, setStateNNP,
                        stateNNS, setStateNNS,
                        stateNNC, setStateNNC,
                        stateCNS, setStateCNS,
                        stateCNC, setStateCNC,

                    }}>

                        <TFModels />
                        <div className='predictor'>
                            <div className='LinePlot'>
                                <Suspense fallback={<p>Loading advice...</p>}>
                                    <LinePlot />
                                </Suspense>
                            </div>
                            <div className='grid-container1'>
                                <div class="item1" onClick={() => startTransition(() => setStateLRP(!stateLRP))}>1</div>
                                <div class="item2" onClick={() => startTransition(() => setStateLRS(!stateLRS))}>2</div>
                                <div class="item3" onClick={() => startTransition(() => setStateLRC(!stateLRC))}>3</div>
                            </div>
                            <div className='grid-container2'>
                                <div class="item4" onClick={() => startTransition(() => setStateNNP(!stateNNP))}>4</div>
                                <div class="item5" onClick={() => startTransition(() => setStateNNS(!stateNNS))}>5</div>
                                <div class="item6" onClick={() => startTransition(() => setStateNNC(!stateNNC))}>6</div>
                            </div>
                            <div className='grid-container3'>
                                <div class="item7" onClick={() => startTransition(() => setStateCNS(!stateCNS))}>7</div>
                                <div class="item8" onClick={() => startTransition(() => setStateCNC(!stateCNC))}>8</div>
                            </div>
                            <div className="tabs-header">
                                <div className={toggleState === 1 ? 'header-active' : 'header-silent'}
                                    onClick={() => toggleTab(1)}>
                                    <h1 >
                                        Processing Parameters</h1>
                                </div>
                                <div className={toggleState === 2 ? 'header-active' : 'header-silent'}
                                    onClick={() => toggleTab(2)}>
                                    <h1 >
                                        In-process Signals</h1>
                                </div>
                            </div>
                            {toggleState === 1 ?
                                <div>
                                    <ProcessingParameters />
                                </div>
                                : null}

                            {toggleState === 2 ?
                                <div>
                                    <Signal />
                                </div>
                                : null}
                        </div>
                    </ResContext.Provider >
                </DataContext.Provider >

            </ParameterContext.Provider>

        </StateContext.Provider>
    )
}

export default ECMPredictor