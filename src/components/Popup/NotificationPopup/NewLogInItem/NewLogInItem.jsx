import React from 'react'
import './NewLogInItem.css'
import newLogImg from '../../images/newLogImg.svg'
import NotificationInfo from '../NotificationInfo/NotificationInfo'

const NewLogInItem = () => {
  return (
    <>
       <span className='bh-newLogImg'>
          <img src={newLogImg} alt='newLogImg'/>
       </span>
       <div className='bh-logItemBox'>
            <NotificationInfo title='New Login Activity' price='Ip : 192.168.1.1' />
            <button className='newLogdBtn'>Warning</button>
        </div>
    </>
  )
}

export default NewLogInItem