import React from 'react'
import './CryptoUnits.css'
import bitcoinImg from '../../images/bitcoinImg.svg'
import CryptoBoxPopup from '../CryptoBoxPopup/CryptoBoxPopup'

const CryptoUnits = () => {
  return (
    <div className='bh-cryptoUnitsPopup'>
        <p className='cryptoTitle'>Crypto Units </p>
        <div className="cryptoUnitsWrapper">
            <CryptoBoxPopup cryptoImg={bitcoinImg} title='Bits' desc='BITS'/>
            <CryptoBoxPopup cryptoImg={bitcoinImg} title='Satoshi' desc='SATS'/>
        </div> 
    </div>
  )
}

export default CryptoUnits