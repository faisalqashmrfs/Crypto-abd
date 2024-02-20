import React, { useState } from 'react'
import './PopupSettings.css'
import TopSecPopup from '../TopSecPopup/TopSecPopup'
import currencyFlag from '../images/currencyFlag.svg'
import rightArrow from '../images/rightArrow.svg'
import lightMode from '../images/lightMode.svg'
import darkMode from '../images/darkMode.svg'

const PopupSettings = ({setClicked, setOpenCurrency}) => {

  const [mode, setMode] = useState({
    light: false,
    dark: true
  })

 function openCurrencyPopup() {
   setClicked(false)
   setOpenCurrency(true)
 }

  return (
   <>
    <div className='bh-settingsOverlay'></div>
    <div className='bh-popupSettings'>
       <TopSecPopup title='Settings' setClicked={setClicked} />
       <ul className='popupSettingsList'>
          <li className='popupSettingsItem'>
             <h6 className='itemTitle'>Currency</h6>
             <div className="rightOfItem" onClick={openCurrencyPopup}>
                <img src={currencyFlag} alt='currencyFlag' className='currencyFlag' />
                <h6 className='currencyName'>USD</h6>
                <img src={rightArrow} alt='rightArrow' />
             </div>
          </li>

          <li className='popupSettingsItem'>
             <h6 className='itemTitle'>Theme</h6>
             <div className="rightOfItem modeBox">
                <button className={`${mode.light ? 'active' : ''}`}
                        onClick={() => setMode({mode, light: !mode.light})}
                        >
                  <img src={lightMode} alt='lightMode' />
                  Light
                </button>
                <button className={`${mode.dark ? 'active' : ''}`}
                        onClick={() => setMode({mode, dark: !mode.dark})}
                      >
                  <img src={darkMode} alt='darkMode' />
                  Dark
                </button>
             </div>
          </li>

          <li className='popupSettingsItem'>
             <h6 className='itemTitle'>Language</h6>
             <div className="rightOfItem">
                <h6 className='currencyName'>English US</h6>
                <img src={rightArrow} alt='rightArrow' />
             </div>
          </li>
       </ul>

       <div className="allSettingsBox">
          <button>
             All settings
             <img src={rightArrow} alt='rightArrow' />
          </button>
       </div>
    </div>
   
    </>
  )
}

export default PopupSettings