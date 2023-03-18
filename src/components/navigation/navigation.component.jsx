import './navigation.styles.scss'
import { Outlet } from 'react-router-dom';
import {useState} from 'react';
import  HomeLogo  from '../../assets/images/meinsuit.jpg';

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const scrollTop = () => {
        setIsNavExpanded(false);
        window.scrollTo(0, 0);
    }

    const scrollTo = (id) => {
        setIsNavExpanded(false);
        let scrollLoc = document.getElementById(id);
        scrollLoc && scrollLoc.scrollIntoView({ behavior: "smooth", block: "start"});
    }

    return(
        <>
        <nav className="navigation">
            <a href="#" className="brand-name" onClick={(e) => {
                        e.preventDefault();
                        scrollTo('homeContainer');
                    }}>
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
                    <a href="#" onClick={() => {
                            scrollTop();
                        }}><span>Photos</span></a>
                </li>
                <li>
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        scrollTo('aboutContainer');
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