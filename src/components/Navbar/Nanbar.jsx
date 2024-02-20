import Language from '../Popup/Language/Language';
import PopupSettings from "../Popup/PopupSettings/PopupSettings";
import AllNotifications from "../Popup/NotificationPopup/AllNotifications/AllNotifications";
import AllCurrencies from "../Popup/CurrencyPopup/AllCurrencies/AllCurrencies";
import "./Navbar.css";
import img1 from "./../../assets/img-SN/Mega-Menue.svg"
import img2 from "./../../assets/img-SN/Wallet-Icon.svg";
import img3 from "./../../assets/img-SN/Settings-Icon.svg"
import img4 from "./../../assets/img-SN/Notification-Icon.svg"
import img5 from "./../../assets/img-SN/search-normal.svg"
import img6 from "./../../assets/img-SN/UK.png"
import img7 from "./../../assets/img-SN/Arrow-Icon.svg"
import { useState } from "react";
import PopUpMenu from "./../ManScreen/PopUpMenu/PopUpMenu"
const Nanbar = () => {
        const [clickedLanguage, setClickedLanguage] = useState(false)
        const [clickedSettings, setClickedSettings] = useState(false)
        const [clickedNotificatin, setClickedNotificatin] = useState(false)
        const [openCurrency, setOpenCurrency] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [showPopupArrow, setshowPopupArrow] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
        setshowPopupArrow(!showPopupArrow)
    };
    return (
      <>
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
                <button className="AB-nav-select" onClick={() => setClickedLanguage(true)}>
                    <img src={img6} alt="" />
                    <p>English</p>
                    <img src={img7} alt="" />
                </button>
                <button className="AB-nav-icon">
                    <img src={img2} alt="" />
                </button>
                <button className="AB-nav-icon" onClick={() => setClickedSettings(true)}>
                    <img src={img3} alt="" />
                </button>
                <button className="AB-nav-icon" onClick={() => setClickedNotificatin(true)}>
                    <img src={img4} alt="" />
                </button>
            </div>
        </nav>
        {
            clickedLanguage && <Language setClicked={setClickedLanguage} />
        }

        {
            clickedSettings && <PopupSettings  setClicked={setClickedSettings} setOpenCurrency={setOpenCurrency}/>
        }

        {
            clickedNotificatin && <AllNotifications setClicked={setClickedNotificatin} />
        }

        {
            openCurrency && <AllCurrencies setClicked={setOpenCurrency} />
        }
     </>
    )
}

export default Nanbar