import {useState} from 'react'
import SetLedScene from './setLedScene.script'
import Sliders from './sliders.component'
import debounceFn from './leds.script'

const Scenes = ({selectedDevices}) => {
    const [color, setColor] = useState("#00FFFF");

    const scenes = {   
       "confetti": 'Confetti',
       "friends": 'Split Strip',
       "twinkle": 'Twinkle',
       "rainbow": 'Rainbow',
       "rainbow_beat": 'Rainbow Beat',
       "glitter": 'Rainbow With Glitter',
       "beat_wave": 'Pride',
       "sign": 'Sinelon',
       "music": 'Beats',
       "juggle": 'Juggle',
       "fade": 'Fade',
    }

    const sendScene = async (value) => {
        let things = Object.values(selectedDevices);
        let thingObj = {};
        things.forEach((thing) => {return thingObj[thing] = value});
        SetLedScene(JSON.stringify(thingObj));
    }

    const setScene = (event) => {
        sendScene(event.target.value);
    }

    const newColor = (color) => {
        const colorToSet = "color1="+color;
        setColor(color);
        sendScene(colorToSet);
    }

     const setSliders = (value) => {
        sendScene(value);
     }

    const debounceColor = debounceFn(newColor, 200);

    return (
        <>

            <div className='buttonContainers'>
                <button className='deviceButtons' value="color1=#ffffff" onClick={setScene}>On</button>
                <input className='deviceButtons'  type="color" value={color} onChange={e => debounceColor(e.target.value)} />
                <button className='deviceButtons' value="color1=#000000" onClick={setScene}>Off</button>
            </div>
            <Sliders setSliders={setSliders}/>
            <h2 className="centerText">Scenes</h2>
            <div className='buttonContainers'>
                {
                    Object.keys(scenes).map((key, i)=>{
                        return <button className='deviceButtons' key={`scenes${i}`} onClick={setScene} value={key}>{scenes[key]}</button>
                    })
                }
            </div>
        </>
    )
}
export default Scenes;