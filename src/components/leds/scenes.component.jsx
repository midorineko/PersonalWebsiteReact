import SetLedScene from './setLedScene.script'

const Scenes = ({selectedDevices}) => {
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

    return (
        <>
            <div class='buttonContainers'>
                <button className='deviceButtons' value="color1=#ffffff" onClick={setScene}>On</button>
                <button className='deviceButtons' value="color1=#000000" onClick={setScene}>Off</button>
            </div>
            <div class='buttonContainers'>
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