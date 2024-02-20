import React from 'react'
import './SettingsTitle.css'
import moreIcon from '../../Images/moreIcon.svg'

const SettingsTitle = ({title}) => {
  return (
    <div className='bh-titleWrapper'>
    <h6 className='settingsTitle'>{title}</h6>
    <div className='moreIconContainer'>
       <img src={moreIcon} alt="moreIcon" />
    </div>
</div>
  )
}

export default SettingsTitle