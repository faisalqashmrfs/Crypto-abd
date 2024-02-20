import React from 'react'
import './CryptoBoxPopup.css'

const CryptoBoxPopup = ({cryptoImg,title,desc}) => {

  return (
    
    <div className="bh-cryptoUnitsBoxPopup">
       <img src={cryptoImg} alt='currencyImg' />
       <div className="cryptoInfo">
          <h4 className='cryptoName'>{title}</h4>
          <span className='cryptoDesc'>{desc}</span>
       </div> 
    </div> 
  )
}

export default CryptoBoxPopup