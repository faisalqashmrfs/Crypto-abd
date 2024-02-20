import React, {useState} from 'react'
import './PopularCurrencies.css'
import unitedStatesCurr from '../Images/unitedStatesCurr.svg'
import euroCurrency from '../Images/euroCurrency.svg'
import poundCurrency from '../Images/poundCurrency.svg'
import cryptoUnitsIcon from '../Images/cryptoUnitsIcon.svg'
import australianCurr from '../Images/australianCurr.svg'
import brazilianCurr from '../Images/brazilianCurr.svg'
import swissCurr from '../Images/swissCurr.svg'
import chileCurr from '../Images/chileCurr.svg'
import chinaCurr from '../Images/chinaCurr.svg'
import danishCurr from '../Images/danishCurr.svg'
import moreIcon from '../Images/moreIcon.svg'
import CurrencyBox from '../CurrencyBox/CurrencyBox'
import CryptoUnitsBox from '../CryptoUnitsBox/CryptoUnitsBox'

const PopularCurrencies = () => {

  const popularCurrData = [
    {currencyImg: unitedStatesCurr, title:"United States Dollar", abbrev: "USD", symbol:"$"},
    {currencyImg: euroCurrency, title:"Euro", abbrev: "Eur", symbol:"$"},
    {currencyImg: poundCurrency, title:"Pound Sterling" , abbrev: "GBP" , symbol:"R$"}
  ]

  const currencyBoxData = [
    {currencyImg: unitedStatesCurr, title:"United States Dollar", abbrev: "USD", symbol:"$"},
    {currencyImg: australianCurr, title:"Australian Dollar", abbrev: "AUD", symbol:"$"},
    {currencyImg: brazilianCurr, title:"Brazilian Real", abbrev: "BRL", symbol:"R$"},
    {currencyImg: swissCurr, title:"Swiss Franc", abbrev: "CHF", symbol:"FR"},
    {currencyImg: chileCurr, title:"Chilean Peso", abbrev: "AUD", symbol:"$"},
    {currencyImg: chinaCurr, title:"Chinese Yuan" , abbrev: "CNY", symbol:"¥"},
    {currencyImg: danishCurr, title:"Danish Krone", abbrev: "DKK", symbol:"KR"},
    {currencyImg: euroCurrency, title:"Euro", abbrev: "Eur", symbol:"$"},
    {currencyImg: poundCurrency, title:"Pound Sterling" , abbrev: "GBP" , symbol:"R$"},

    {currencyImg: chinaCurr, title:"Chinese Yuan" , abbrev: "CNY", symbol:"¥"},
    {currencyImg: danishCurr, title:"Danish Krone", abbrev: "DKK", symbol:"KR"},
    {currencyImg: euroCurrency, title:"Euro", abbrev: "Eur", symbol:"$"},
    {currencyImg: poundCurrency, title:"Pound Sterling" , abbrev: "GBP" , symbol:"R$"}
  ]

  const [noOfElement, setNoOfElement] = useState(9)
  const slice = currencyBoxData.slice(0,noOfElement)

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement)
  }

  return (
    <div className='bh-popularCurr'>
        <p className='popularTitle'>Popular Currencies</p>
        <div className="popularCurrWrapper">
             {
                popularCurrData.map((item,index) => (
                  <CurrencyBox 
                      key={index}
                      currencyImg={item.currencyImg} 
                      title={item.title} 
                      abbrev={item.abbrev}
                      symbol={item.symbol} />
                  ))
             }
        </div> {/* End popularCurrWrapper */}

        <p className='cryptoUnitsTitle'>Crypto Units </p>

        <div className="bh-cryptoUnits">
             <div className="cryptoUnitsWrapper">
                  <CryptoUnitsBox unitsImg={cryptoUnitsIcon} title="Bits" subtitle="BITS" />
                  <CryptoUnitsBox unitsImg={cryptoUnitsIcon} title="Satoshi" subtitle="SATS" />
             </div> {/* End  cryptoUnitsWrapper */}
        </div> {/* End crypto units */}

        <div className="bh-allUnits">
             <p className='allUnitsTitle'>Fiat Currencies</p>
              <div className="allUnitsWrapper">
                  {
                    slice.map((item,index) => (
                      <CurrencyBox 
                         key={index}
                         currencyImg={item.currencyImg} 
                         title={item.title} 
                         abbrev={item.abbrev}
                         symbol={item.symbol} />
                    ))
                  }
              </div> {/* End allUnitsWrapper */}

              <div className="loadBtnContainer">
                    <button className='loadMoreBtn' onClick={loadMore}>
                        <img className='loadIcon' src={moreIcon} alt="moreIcon" />
                        <span className='loadSpan'>Load More</span>
                    </button>
               </div> {/* End loadBtnContainer*/}

        </div> {/* End bh-allUnits */}
    </div>
  )
}

export default PopularCurrencies