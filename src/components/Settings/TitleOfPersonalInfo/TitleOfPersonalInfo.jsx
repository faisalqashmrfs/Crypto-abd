import React from 'react'
import './TitleOfPersonalInfo.css'
import editIcon from '../Images/editIcon.svg'

const TitleOfPersonalInfo = () => {
  return (
    <div className='titleSettingsWrapper'>
        <h6 className='titleSettings'>My Profile</h6>
        <div className='iconContainer'>
           <img src={editIcon} alt="editIcon" />
           <span>Edit</span>
        </div>
    </div>
  )
}

export default TitleOfPersonalInfo