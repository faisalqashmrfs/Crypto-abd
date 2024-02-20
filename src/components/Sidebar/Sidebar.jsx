import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import img1 from "./../../assets/img-SN/Group 8341.svg";
import img2 from "./../../assets/img-SN/Avatar-Image.png";
import img3 from "./../../assets/img-SN/Frame.svg"
import img4 from "./../../assets/img-SN/Dashboard-Icon.svg"
import img5 from "./../../assets/img-SN/Exchange-Icon.svg"
import img6 from "./../../assets/img-SN/Price-Icon.svg"
import img7 from "./../../assets/img-SN/Wallet-Icon.svg"
import img8 from "./../../assets/img-SN/Market-Icon.svg"
import img9 from "./../../assets/img-SN/Transaction-Icon.svg"
import img10 from "./../../assets/img-SN/Settings-Icon.svg"
import img11 from "./../../assets/img-SN/News-Icon.svg"
import img12 from "./../../assets/img-SN/Chat-Icon.svg"
import img13 from "./../../assets/img-SN/Dark-Icon.svg"
import img14 from "./../../assets/img-SN/Light-Icon.svg"
import React, { useState } from "react";

const Sidebar = () => {

    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
      };
  
    return (
        <nav className='AB-sidebar'>
            <div className="AB-sidebar-top-wrapper">
                <div className="AB-sidebar-top">
                    <Link className="AB-logo__wrapper">
                        <img src={img1} alt="" className="AB-logo-small" />
                        <span className="AB-hide">Whale.</span>
                    </Link>
                </div>
            </div>
            
             <div className="AB-perconal-ph">
                <NavLink to='/userProfile'>
                  <img src={img2} alt="" className="AB-perconal" />
                </NavLink>
                <h3 className="AB-hide">Erfan Amade</h3>
                <div className="AB-span-img-SN">
                    <span className="AB-hide">verified</span>
                    <img src={img3} alt="" className="AB-name-icon-true" />
                </div>
            </div>

            <div className="AB-sidebar-links">
                <ul>
                    <li>
                        <NavLink to="/" className="AB-tooltip">
                            <img src={img4} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Dashboard</span>
                            <span className="AB-tooltip__content">Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="exchange" className="AB-tooltip">
                            <img src={img5} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Exchange</span>
                            <span className="AB-tooltip__content">Exchange</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="livePrices" className="AB-tooltip">
                            <img src={img6} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Live prices</span>
                            <span className="AB-tooltip__content">Live prices</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="wallet" className="AB-tooltip">
                            <img src={img7} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Wallet</span>
                            <span className="AB-tooltip__content">Wallet</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="nftMarket" className="AB-tooltip">
                            <img src={img8} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">NFT Market</span>
                            <span className="AB-tooltip__content">NFT Market</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="transaction" className="AB-tooltip">
                            <img src={img9} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Transaction</span>
                            <span className="AB-tooltip__content">Transaction</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="settings" className="AB-tooltip">
                            <img src={img10} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">Settings</span>
                            <span className="AB-tooltip__content">Settings</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="news" className="AB-tooltip">
                            <img src={img11} alt="" className="AB-the-icon-sidebar" />
                            <span className="AB-link AB-hide">News</span>
                            <span className="AB-tooltip__content">News</span>
                        </NavLink>
                    </li>
                </ul>

                <div className="AB-sidebar-links-part2">
                    <h5 className="AB-sidebar-links-h5">Insignts</h5>
                    <ul>
                        <li>
                            <NavLink to="inbox" className="AB-tooltip">
                                <img src={img12} alt="" className="AB-the-icon-sidebar" />
                                <span className="AB-link AB-hide">Inbox</span>
                                <span className="AB-tooltip__content">Inbox</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="AB-dark-white">
                <button>
                    <img src={img14} alt="" />
                    Light
                </button>
                <button>
                    <img src={img13} alt="" />
                    Dark
                </button>
            </div>

            <button className="AB-btn-dark-white" onClick={handleClick}>
                {toggled ? <img src={img13} alt="" /> : <img src={img14} alt="" />}
            </button>
        </nav>
    )
}

export default Sidebar;