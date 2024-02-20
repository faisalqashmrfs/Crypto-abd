import React from 'react'
import './PopularBox.css'

const PopularBox = ({currencyImg, currencyTitle, abbrev, symbol}) => {
  return (
    <div className="bh-popularBox">
       <img src={currencyImg} alt='currencyImg' className='flagCountry' />
       <div className="popularCurrInfo">
           <h4 className='currName'>{currencyTitle}</h4>
           <div className="popularCurrAbbrev">
              <span className='currAbbrev'>{abbrev}</span>
              <span className='spaceBetween'>-</span>
              <span className='currSymbol'>{symbol}</span>
           </div> {/* End popularCurrAbbrev*/}
       </div> {/* End popularCurrInfo*/}
    </div> 
  )
}

export default PopularBox