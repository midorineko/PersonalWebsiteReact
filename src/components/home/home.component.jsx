import './home.styles.scss'
import  HomeLogo  from '../../assets/images/meinsuit.jpg';
import {useEffect} from 'react';

const Home = () => {
    const fetchUrl = () =>{
        fetch('https://orhr03i0hk.execute-api.us-east-1.amazonaws.com/default').then((res)=>{
            return res.json
        }).then((data)=>{
            console.log(data)
        })
    }
    return (
        <>
            <div className='homeContainer'>
                <div className='homeCenterLogoContainer'>
                    <img className='homeCenterLogo' src={HomeLogo} alt="Whoops No Logo"/>
                </div>
                <div>
                    <h1 className='homeMyName'>Steven Inouye</h1>
                </div>
                <button onClick={fetchUrl}>Fetch Lights</button>
            </div>
        </>
    )
}
export default Home;
