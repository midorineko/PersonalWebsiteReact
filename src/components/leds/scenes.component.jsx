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
            {
                Object.keys(scenes).map((key, i)=>{
                    return <button key={`scenes${i}`} onClick={setScene} value={key}>{scenes[key]}</button>
                })
            }
        </>
    )
}
export default Scenes;