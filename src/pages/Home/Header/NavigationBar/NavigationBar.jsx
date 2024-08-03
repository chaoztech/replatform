import {useState} from 'react';

import hamburgerLogo from "../../../../assets/commonImages/hamburger-white.svg";
import closeLogo from "../../../../assets/commonImages/close.svg";

import "./NavigationBar.scss";

const NavigationBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleMobileView = () => {
        setIsMobileView((prev) => (!prev));
    }

    // const { getUserProfile } = useAuth();
    // const user = getUserProfile();
    return (
        <nav className={`${isMobileView ? "navigation-mobile-view" : "navigation-bar-wrapper" } ${isSticky ? "sticky" : ""}`}>
            <div className="navigation-link-section">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#demo">Demo</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="#contactUs">Contact us</a>
                    </li>
                </ul>

                <div id="indicator"></div>    
            </div>
            { isMobileView ? 
                    <div className="hamburger-menu">
                        <img className="close" src={closeLogo} alt="close" onClick={toggleMobileView} />
                    </div>      
                :    
                    <div className="hamburger-menu">
                        <img src={hamburgerLogo} alt="hamburger" onClick={toggleMobileView} />
                    </div>
            }
        </nav>
    )
}

export default NavigationBar;