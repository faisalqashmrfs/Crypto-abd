import React from 'react'
import './ProfileInfoEnable.css'

const ProfileInfoEnable = ({icon, title, btnContent, setBtnContent}) => {
  return (
    <div className="bh-infoEnable">
        <img src={icon} alt="deviceIcon" className='deviceIcon'/>
        <div className="infoEnableBox">
          <h6 className='infoEnableTitle'>{title}</h6>
          <button className={`infoEnableBtn ${btnContent ? 'infoEnable' : 'infoDisable'}`}
                   onClick={() => {
                    setBtnContent(!btnContent)
                    }}>
             {btnContent ? "Enable" : "Disabled"}
          </button>
        </div>
      </div> 
 
  )
}

export default ProfileInfoEnable