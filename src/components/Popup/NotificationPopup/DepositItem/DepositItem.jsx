import React from 'react'
import './DepositItem.css'
import depositImg from '../../images/depositImg.svg'
import NotificationInfo from '../NotificationInfo/NotificationInfo'

const DepositItem = () => {
  return (
    <>
        <span className='bh-depositImg'>
            <img src={depositImg} alt='depositImg' />
        </span>
        <div className='bh-depositItemBox'>
            <NotificationInfo title='Diposit USDT' price='$659.10' />
            <button className='depositBtn'>Complited</button>
        </div>
    </>
  )
}

export default DepositItem