import {useState, useCallback } from 'react'
import debounceFn from './leds.script';

const Sliders = ({setSliders}) => {
    const [brightnessValue, setBrightnessValue] = useState(100);

    const setSlidersValue = (type) =>{
        let sceneToSend;
        if(type === 'brightness'){
            sceneToSend = "brightness=" + parseInt(brightnessValue/100 * 255)
        }
        setSliders(sceneToSend);
    }

    return (
        <>
            <div className='buttonContainers'>
                <button className='deviceButtons' value="color1=#ffffff" onClick={setSlidersValue}>Brightness</button>
                <input
                    type="range"
                    min="0"
                    max='100'
                    onInput={e => setBrightnessValue(e.target.value)}
                    onMouseUp={e => setSlidersValue('brightness')}
                    value={brightnessValue}
                />
                <button className='deviceButtons' value="color1=#ffffff" onClick={setSlidersValue}>Speed</button>
                <button className='deviceButtons' value="color1=#000000" onClick={setSlidersValue}>Groupng</button>
            </div>
        </>
    )
}
export default Sliders;