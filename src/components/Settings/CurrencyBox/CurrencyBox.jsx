import React from 'react'
import './CurrencyBox.css'

const CurrencyBox = ({currencyImg, title, abbrev, symbol}) => {
  return (
    <div className="bh-popularCurrBox">
       <img src={currencyImg} alt="countryCurrency" />
       <div className="currencyInfo">
          <h6 className='currencyInfoTitle'>{title}</h6>
          <div className="currencyAbbrev">
             <span className='currencyName'>{abbrev}</span> 
             <span className='spanBetween'>-</span>
             <span className='currencySymbol'>{symbol}</span>
          </div>
       </div>
    </div>
  )
}

export default CurrencyBox