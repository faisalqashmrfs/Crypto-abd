import React from 'react'
import './Popular.css'
import usCurrency from '../../images/usCurrency.svg'
import PopularBox from '../PopularBox/PopularBox'
import euroImg from '../../images/euroImg.svg'
import poundImg from '../../images/poundImg.svg'
import bitcoinImg from '../../images/bitcoinImg.svg'

const Popular = () => {
  return (
    <div className='bh-popular'>
        <p className='popularTitle'>Popular Currencies</p>
        <div className="popularWrapper">
            <PopularBox currencyImg={usCurrency} 
                        currencyTitle='United States Dollar' 
                        abbrev='USD' 
                        symbol='$' />

            <PopularBox currencyImg={euroImg} 
                        currencyTitle='Euro' 
                        abbrev='EUR' 
                        symbol='€' />

            <PopularBox currencyImg={poundImg} 
                        currencyTitle='Pound Sterling' 
                        abbrev='GBP' 
                        symbol='£' />

            <PopularBox currencyImg={bitcoinImg} 
                        currencyTitle='Bitcoin' 
                        abbrev='BTC' 
                        symbol='₿' />
        </div> 
    </div>
  )
}

export default Popular