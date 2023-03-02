import './home.styles.scss'
import  HomeLogo  from '../../assets/images/meinsuit.jpg';
import {useEffect} from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    const fetchUrl = () =>{
        fetch('https://orhr03i0hk.execute-api.us-east-1.amazonaws.com/default', {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
		}
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            return;
        })
        .catch(err => console.error(err));
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
            <Outlet/>
        </>
    )
}
export default Home;
