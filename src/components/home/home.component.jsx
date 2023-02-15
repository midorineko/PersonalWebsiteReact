import './home.styles.scss'
import  HomeLogo  from '../../assets/images/meinsuit.jpg';

const Home = () => {
    return (
        <>
            <div className='homeContainer'>
                <div className='homeCenterLogoContainer'>
                    <img className='homeCenterLogo' src={HomeLogo} alt="Whoops No Logo"/>
                </div>
                <div>
                    <h1 className='homeMyName'>Steven Inouye</h1>
                </div>
            </div>
        </>
    )
}
export default Home;