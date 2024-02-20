import "./Navbar.css";
import img1 from "./../../assets/img/Mega-Menue.svg"
import img2 from "./../../assets/img/Wallet-Icon.svg";
import img3 from "./../../assets/img/Settings-Icon.svg"
import img4 from "./../../assets/img/Notification-Icon.svg"
import img5 from "./../../assets/img/search-normal.svg"
import img6 from "./../../assets/img/UK.png"
import img7 from "./../../assets/img/Arrow-Icon.svg"
import PopUpMenu from "../PopUpMenu/PopUpMenu";
import React, { useState } from 'react';

const Nanbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopupArrow, setshowPopupArrow] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
        setshowPopupArrow(!showPopupArrow)
    };
    return (
        <nav className="AB-navbar">
            <div className="AB-menu-form">
                <button
                    className={`AB-button-menu ${showPopup ? 'menu-active' : ''}`}
                    onClick={togglePopup}
                >
                    <img src={img1} alt="" />
                    {showPopup && (
                        <span className="AB-arrow-icon"></span>
                    )}
                </button>
                {showPopup && <PopUpMenu />}
                <form className="AB-TheFormSearch">
                    <input type="search" id="AB-searchInput" placeholder="Search in dashboard..." />
                    <input type="image" src={img5} alt="Search" />
                </form>
            </div>
            <div className="AB-Bart2">
                <button className="AB-nav-select">
                    <img src={img6} alt="" />
                    <p>English</p>
                    <img src={img7} alt="" />
                </button>
                <button className="AB-nav-icon">
                    <img src={img2} alt="" />
                </button>
                <button className="AB-nav-icon">
                    <img src={img3} alt="" />
                </button>
                <button className="AB-nav-icon">
                    <img src={img4} alt="" />
                </button>
            </div>
        </nav>
    )
}

export default Nanbar