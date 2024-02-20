import React from 'react'
import './WithDrawItem.css'
import withdrawImg from '../../images/withdrawImg.svg'
import NotificationInfo from '../NotificationInfo/NotificationInfo'

const WithDrawItem = () => {
  return (
    <>
        <span className='bh-imgContainer'>
            <img src={withdrawImg} alt='withdrawImg'/>
        </span>
        <div className='bh-notifiItemBox'>
            <NotificationInfo title='Withdraw USDT' price='$659.10' />
            <button className='complitedBtn'>Complited</button>
        </div> 
    </>
  )
}

export default WithDrawItem