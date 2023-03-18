import './navigation.styles.scss'
import { Outlet } from 'react-router-dom';
import {useState} from 'react';
import  HomeLogo  from '../../assets/images/meinsuit.jpg';

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <>
        <nav className="navigation">
            <a href="/#homeContainer" className="brand-name">
                <img className="navLogo" src={HomeLogo} alt="Home"/>
            </a>
            <button
                className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded)
                }}
            >
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                <li>
                    <a href="/#photos">Photos</a>
                </li>
                <li>
                    <a href="/#aboutContainer" onClick={() => {
                        setIsNavExpanded(false)
                    }}><span>About</span></a>
                </li>
                {/* <li>
                    <a href="/contact">Contact</a>
                </li> */}
                <li>
                    <a href="/leds">LEDs</a>
                </li>
                </ul>
            </div>
        </nav>
        <div id="photos"></div>
        <Outlet/>
        </>
    )
}
export default Navigation;