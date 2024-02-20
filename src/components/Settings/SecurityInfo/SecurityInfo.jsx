import React from 'react'
import './SecurityInfo.css'

const SecurityInfo = ({icon,title,para}) => {
  return (
    <div className="bh-securityInfo">
            <img src={icon} alt="securityPassIcon" className='securityPassIcon' />
            <div className='bh-innerBox'>
              <h4 className='passInfoTilte'>{title}</h4>
              <p className='passInfoPara'>{para}</p>
            </div>
        </div>
  )
}

export default SecurityInfo