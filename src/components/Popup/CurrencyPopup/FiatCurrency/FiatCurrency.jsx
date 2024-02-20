import React from 'react'
import './FiatCurrency.css'
import usCurrency from '../../images/usCurrency.svg'
import austalianflag from '../../images/austalianflag.svg'
import brazilFlag from '../../images/brazilFlag.svg'
import canadaFlag from '../../images/canadaFlag.svg'
import swissFlag from '../../images/swissFlag.svg'
import chileFlag from '../../images/chileFlag.svg'
import chinaFlag from '../../images/chinaFlag.svg'
import czechFlag from '../../images/czechFlag.svg'
import danishFlag from '../../images/danishFlag.svg'
import euroFlag from '../../images/euroImg.svg'
import poundFlag from '../../images/poundImg.svg'
import hongkongFlag from '../../images/hongkongFlag.svg'
import hangarianFlag from '../../images/hangarianFlag.svg'
import indonesiaFlag from '../../images/indonesiaFlag.svg'
import israelFlag from '../../images/israelFlag.svg'
import indianFlag from '../../images/indianFlag.svg'
import PopularBox from '../PopularBox/PopularBox'

const FiatCurrency = () => {

  const FiatCurrencyData = [
    {fiatCurrencyImg: usCurrency, fiatCurrencyTitle: 'United States Dollar', fiatCurrencyAbbrev: 'USD', Symbol: '$'},
    {fiatCurrencyImg: austalianflag, fiatCurrencyTitle: 'Australian Dollar', fiatCurrencyAbbrev: 'AUD', Symbol: '$'},
    {fiatCurrencyImg: brazilFlag, fiatCurrencyTitle: 'Brazilian Real', fiatCurrencyAbbrev: 'BRL', Symbol: 'R$'},
    {fiatCurrencyImg: canadaFlag, fiatCurrencyTitle: 'Canadian Dollar', fiatCurrencyAbbrev: 'CAD', Symbol: 'R$'},
    {fiatCurrencyImg: swissFlag, fiatCurrencyTitle: 'Swiss Franc', fiatCurrencyAbbrev: 'CHF', Symbol: 'FR'},
    {fiatCurrencyImg: chileFlag, fiatCurrencyTitle: 'Chilean Peso', fiatCurrencyAbbrev: 'AUD', Symbol: '$'},
    {fiatCurrencyImg: chinaFlag, fiatCurrencyTitle: 'Chinese Yuan', fiatCurrencyAbbrev: 'CNY', Symbol: '¥'},
    {fiatCurrencyImg: czechFlag, fiatCurrencyTitle: 'Czech Koruna', fiatCurrencyAbbrev: 'CZK', Symbol: 'Kč'},
    {fiatCurrencyImg: danishFlag, fiatCurrencyTitle: 'Danish Krone', fiatCurrencyAbbrev: 'DKK', Symbol: 'KR'},
    {fiatCurrencyImg: euroFlag, fiatCurrencyTitle: 'Euro', fiatCurrencyAbbrev: 'EUR', Symbol: '$'},
    {fiatCurrencyImg: poundFlag, fiatCurrencyTitle: 'Pound Sterling', fiatCurrencyAbbrev: 'GBP', Symbol: 'R$'},
    {fiatCurrencyImg: hongkongFlag, fiatCurrencyTitle: 'Hong Kong Dollar', fiatCurrencyAbbrev: 'HKD', Symbol: '$'},
    {fiatCurrencyImg: hangarianFlag, fiatCurrencyTitle: 'Hungarian Forint', fiatCurrencyAbbrev: 'HUF', Symbol: 'Ft'},
    {fiatCurrencyImg: indonesiaFlag, fiatCurrencyTitle: 'Indonesian Rupiah', fiatCurrencyAbbrev: 'IDR', Symbol: '$'},
    {fiatCurrencyImg: israelFlag, fiatCurrencyTitle: 'Israeli New Shekel', fiatCurrencyAbbrev: 'ILS', Symbol: '₪'},
    {fiatCurrencyImg: indianFlag, fiatCurrencyTitle: 'Indian Rupee', fiatCurrencyAbbrev: 'INR', Symbol: '₹'}
  ]
  return (
    <div className='bh-fiatCurrency'>
        <p className='cryptoTitle'>Fiat Currencies</p>
        <div className="fiatCurrencyWrapper">
          {
             FiatCurrencyData.map((item,index) => (
                <PopularBox key={index} 
                        currencyImg={item.fiatCurrencyImg} 
                        currencyTitle={item.fiatCurrencyTitle} 
                        abbrev={item.fiatCurrencyAbbrev}
                        symbol={item.Symbol}/>
                ))
           }
        </div> 
    </div>
  )
}

export default FiatCurrency