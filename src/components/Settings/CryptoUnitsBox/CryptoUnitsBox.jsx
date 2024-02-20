import React from 'react'
import './CryptoUnitsBox.css'

const CryptoUnitsBox = ({unitsImg, title, subtitle}) => {
  return (
    <div className="bh-cryptoUnitsBox">
        <img src={unitsImg} alt="cryptoUnitsIcon" />
        <div className='cryptoUnitsInfo'>
            <h6 className='cryptoInfoTitle'>{title}</h6>
            <span className='unitName'>{subtitle}</span>
        </div>
    </div>
  )
}

export default CryptoUnitsBox