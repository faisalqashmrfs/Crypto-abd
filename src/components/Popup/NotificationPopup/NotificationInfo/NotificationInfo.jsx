import React from 'react'
import './NotificationInfo.css'

const NotificationInfo = ({title, price}) => {
  return (
       <div className="bh-notifiItemInfo">
            <h4 className='notifiInfoTitle'>{title}</h4>
            <p className='notifiInfoPrice'>{price}</p>
       </div> 
  )
}

export default NotificationInfo