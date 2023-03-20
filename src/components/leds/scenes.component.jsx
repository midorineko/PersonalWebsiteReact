import {useState} from 'react'
import SetLedScene from './setLedScene.script'

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

    const setScene = async (event) => {
        let things = Object.values(selectedDevices);
        let thingObj = {};
        things.forEach((thing) => {return thingObj[thing] = event.target.value});
        SetLedScene(JSON.stringify(thingObj));
    }

    const debounceButton = (fn) => {
        let timer;
        return function(event){
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=>{
                fn(event);
            },200)
        }
    }

    const newColor = async (color) => {
        const colorToSet = "color1="+color;
        setColor(color);
        let things = Object.values(selectedDevices);
        let thingObj = {};
        things.forEach((thing) => {return thingObj[thing] = colorToSet});
        SetLedScene(JSON.stringify(thingObj));
    }

    const debounceColor = debounceButton(newColor);

    return (
        <>
            <div className='buttonContainers'>
                <button className='deviceButtons' value="color1=#ffffff" onClick={setScene}>On</button>
                <input className='deviceButtons'  type="color" value={color} onChange={e => debounceColor(e.target.value)} />
                <button className='deviceButtons' value="color1=#000000" onClick={setScene}>Off</button>
            </div>
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