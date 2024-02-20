import React from 'react'
import './ProfileInfoBox.css'

const ProfileInfoBox = ({profileInfoImg, title, para}) => {
  return (
    <div className="bh-secondRowBox">
        <img src={profileInfoImg} alt="secondRowIcon" className='secondRowIcon'/>
        <div className="secondRowInfo">
          <h6 className='secondRowTitle'>{title}</h6>
          <p className='secondRowPara'>{para}</p>
        </div>
      </div> 

  )
}

export default ProfileInfoBox