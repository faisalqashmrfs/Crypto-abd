import React from 'react'
import './ProfileFirstRow.css'
import img2 from "../Images/Avatar-Image.png"
import SecurityLevel from '../SecurityLevel/SecurityLevel'
import SettingIconToggle from '../Common/SettingIconToggle/SettingIconToggle'

const ProfileFirstRow = () => {

  return (
    <div className='bh-profileRow'>
        <div className="profileRowBox">
           <img src={img2} alt="profilePicture" className='profilePicture'/>
           <div className="profileBoxInfo">
             <button className='verifiedBtn'>Unverified</button>
             <h6 className='uidNum'>UID : 73958136</h6>
           </div>
        </div> {/*End profileRowBox*/}

        <div className="profileRowBox">
           <p>(UYC+8 ) Asia/Singapore</p>
        </div> {/*End profileRowBox*/}

        <div className="profileRowBox">
           <p>Whale.io Pay fees</p>
           <SettingIconToggle />
        </div> {/*End profileRowBox*/}

        <div className="profileRowBox">
           <SecurityLevel />
        </div> {/*End profileRowBox*/}
    </div>
  )
}

export default ProfileFirstRow