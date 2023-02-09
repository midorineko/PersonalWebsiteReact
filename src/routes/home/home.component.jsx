import './home.styles.scss'
import  HomeLogo  from '../../assets/images/meinsuit.jpg';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <div>
                    <h1 className='homeMyName'>Steven Inouye</h1>
                </div>
                <div className='homeCenterLogoContainer'>
                    <img className='homeCenterLogo' src={HomeLogo} alt="Whoops No Logo"/>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default Home;