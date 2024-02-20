import React from 'react'
import './Notifications.css'
import NotificationSettingPart from '../NotificationSettingPart/NotificationSettingPart';
import PhotoKey from "./images/shield-keyhole.svg";
import PhotoChat from "./images/chat.svg";
import Photo2 from "./images/Frame2.svg";
import Photo3 from "./images/Frame3.svg";
import Photo4 from "./images/Frame4.svg";
import SettingsTitle from '../Common/SettingsTitle/SettingsTitle';
import SaveChangebtn from '../SaveChangebtn/SaveChangebtn';
import SettingIconToggle from '../Common/SettingIconToggle/SettingIconToggle';

const Notifications = () => {
  return (
    <div className='notifications'>

      <SettingsTitle title="Notifications" />

      <div className='RO-NotificationBody'>
      <div className="RO-SettingBorder"><NotificationSettingPart background="#0CAF60" logo={PhotoKey} title="Security Alerts" description="Profile Settings" height="100px" icon={<SettingIconToggle />} /></div>

      <div className="RO-SettingBorder"> <NotificationSettingPart background="#627EEA" logo={PhotoChat} title="SMS  Notification" description="Profile Settings" height="100px" icon={<SettingIconToggle/>} /></div>
      <div className="RO-SettingBorder"><NotificationSettingPart background="#FD4C42" logo={Photo2} title="Price Alerts" description="Profile Settings" height="100px" icon={<SettingIconToggle/>} /></div>
      <div className="RO-SettingBorder"> <NotificationSettingPart background="#FB774A" logo={Photo3} title="Referral Commission Alerts" description="Profile Settings" height="100px" icon={<SettingIconToggle/>} /></div>
      <div className="RO-SettingBorder"> <NotificationSettingPart background="#8D3FF1" logo={Photo4} title="Email Notification" description="Profile Settings" height="100px" icon={<SettingIconToggle />}/></div>
      <NotificationSettingPart background="#F38D2F" logo={PhotoKey} title="Device Login Alerts" description="Profile Settings" height="100px" icon={<SettingIconToggle  />}/>
      </div>
      <SaveChangebtn/>

    </div>
  )
}

export default Notifications