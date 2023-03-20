import {useState, useCallback } from 'react'
import debounceFn from './leds.script';

const Sliders = ({setSliders}) => {
    const [brightnessValue, setBrightnessValue] = useState(100);
    const [framesValue, setFramesValue] = useState(50);
    const [groupValue, setGroupValue] = useState(25);

    const [showBright, setShowBright] = useState(false);
    const [showFrames, setShowFrames] = useState(false);
    const [showGroups, setShowGroups] = useState(false);

    const openSlider = (type) => {
        if(type === 'bright'){
            setShowBright(!showBright);
            setShowFrames(false);
            setShowGroups(false);
        }else if(type === 'frames'){
            setShowBright(false);
            setShowFrames(!showFrames);
            setShowGroups(false);
        }else if(type === 'group'){
            setShowBright(false);
            setShowFrames(false);
            setShowGroups(!showGroups);
        }
    }

    const setSlidersValue = (type) =>{
        let sceneToSend;
        if(type === 'brightness'){
            sceneToSend = "brightness=" + parseInt(brightnessValue/100 * 255)
        }else if(type==='frames'){
            sceneToSend = "frames=" + parseInt(framesValue)
        }else if(type==='grouping'){
            sceneToSend = "grouping=" + parseInt(groupValue)
        }
        setSliders(sceneToSend);
    }

    return (
        <>
            <div className='buttonContainers'>
                <button className={showBright ? 'deviceSelected deviceButtons': 'deviceButtons' } value="color1=#ffffff" onClick={(e => openSlider('bright'))}>Brightness</button>
                <button className={showFrames ? 'deviceSelected deviceButtons': 'deviceButtons' } value="color1=#ffffff" onClick={(e => openSlider('frames'))}>Speed</button>

                <button className={showGroups ? 'deviceSelected deviceButtons': 'deviceButtons' } value="color1=#000000" onClick={(e => openSlider('group'))}>Groups</button>
                {showBright ? <input
                        type="range"
                        min="0"
                        max='100'
                        onInput={e => setBrightnessValue(e.target.value)}
                        onMouseUp={e => setSlidersValue('brightness')}
                        value={brightnessValue}
                    />
                : null}
                {showFrames ? <input
                    type="range"
                    min="0"
                    max='100'
                    onInput={e => setFramesValue(e.target.value)}
                    onMouseUp={e => setSlidersValue('frames')}
                    value={framesValue}
                />
                : null}
                {showGroups ? <input
                    type="range"
                    min="0"
                    max='100'
                    onInput={e => setGroupValue(e.target.value)}
                    onMouseUp={e => setSlidersValue('grouping')}
                    value={groupValue}
                />
                : null}
            </div>
        </>
    )
}
export default Sliders;