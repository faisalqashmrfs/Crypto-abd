import React from 'react'
import './SettingsList.css'
import { NavLink } from 'react-router-dom'
import personalcon from '../Images/personalIcon.svg'
import securityIcon from '../Images/securityIcon.svg'
import currencyIcon from '../Images/CurrencyIcon.svg'
import notificationIcon from '../Images/notificationsIcon.svg'
import paymentIcon from '../Images/paymentIcon.svg'
import integrationsIcon from '../Images/integrationsIcon.svg'
import userIcon from '../Images/userIcon.svg'

const SettingsList = () => {
  return (
    <div className='settingsList'>
        <ul className='list'>
           <li className='listItem'>
             <NavLink to='personalInfo' className='link'>
                <img src={personalcon} alt="personalImg" className='itemIcon'/>
                <div className="itemBox">
                   <h6 className='itemTitle'>Personal Informations</h6>
                   <p className='itemSubtitle'>Profile Settings</p>
                 </div>
             </NavLink>
           </li>

           <li className='listItem'>
              <NavLink to='/Settings/security' className='link'>
                 <img src={securityIcon} alt="securityIcon" className='itemIcon'/>
                 <div className="itemBox">
                   <h6 className='itemTitle'>Security</h6>
                   <p className='itemSubtitle'>For your account security</p>
                 </div>
              </NavLink>
            </li>

            <li className='listItem'>
              <NavLink to='/Settings/currency' className='link'>
                 <img src={currencyIcon} alt="currencyIcon" className='itemIcon'/>
                 <div className="itemBox">
                   <h6 className='itemTitle'>Currency Preferences</h6>
                   <p className='itemSubtitle'>Choose currency</p>
                 </div>
              </NavLink>
            </li>

            <li className='listItem'>
              <NavLink to='/Settings/notifications' className='link'>
                 <img src={notificationIcon} alt="notificationIcon" className='itemIcon'/>
                 <div className="itemBox">
                   <h6 className='itemTitle'>Notifications</h6>
                   <p className='itemSubtitle'>Application notification settings</p>
                 </div>
              </NavLink>
            </li>

            <li className='listItem'>
              <NavLink to='/Settings/payment' className='link'>
                 <img src={paymentIcon} alt="paymentIcon" className='itemIcon'/>
                 <div className="itemBox">
                   <h6 className='itemTitle'>Payment Option</h6>
                   <p className='itemSubtitle'>Methods of buying cryptocurrency</p>
                 </div>
              </NavLink>
            </li>

            <li className='listItem'>
              <NavLink to='/Settings/integrations' className='link'>
                 <img src={integrationsIcon} alt="integrationsIcon" className='itemIcon'/>
                 <div className="itemBox">
                   <h6 className='itemTitle'>Integrations</h6>
                   <p className='itemSubtitle'>Access to APIs and side programs</p>
                 </div>
              </NavLink>
            </li>

            <li className='listItem'>
              <NavLink to='/Settings/verification' className='link'>
                 <img src={userIcon} alt="userIcon" className='itemIcon'/>
                 <div className="itemBox">
                   <h6 className='itemTitle'>KYC Verification</h6>
                   <p className='itemSubtitle'>To authenticate your identity</p>
                 </div>
              </NavLink>
            </li>
        </ul>   
    </div>
    
  )
}

export default SettingsList