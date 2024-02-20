import React from 'react'
import './AllCurrencies.css'
import TopSecPopup from '../../TopSecPopup/TopSecPopup'
import searchImg from '../../images/searchImg.svg'
import Popular from '../Popular/Popular'
import CryptoUnits from '../CryptoUnits/CryptoUnits'
import FiatCurrency from '../FiatCurrency/FiatCurrency'

const AllCurrencies = ({setClicked}) => {
  return (
    <>
      <div className='currencyOverlay'></div>
      <div className='bh-currencyPopup'>
        <TopSecPopup title='Select Currency' setClicked={setClicked}/>
         <div className="searchBoxWrapper">
            <div className='searchBox'>
              <img src={searchImg} alt='searchImg'/>
              <input type="text" name='search' className='searchInput' placeholder='Search'/>
            </div>
         </div> 
         <Popular />
         <CryptoUnits />
         <FiatCurrency />
      </div>
    </>  
  )
}

export default AllCurrencies