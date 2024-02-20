import React from 'react'
import './AllNotifications.css'
import TopSecPopup from '../../TopSecPopup/TopSecPopup'
import WithDrawItem from '../WithDrawItem/WithDrawItem'
import DepositItem from '../DepositItem/DepositItem'
import NewLogInItem from '../NewLogInItem/NewLogInItem'
import goRight from '../../images/goRight.svg'

const AllNotifications = ({setClicked}) => {

  return (
  <div>
    <div className='bh-notificationOverlay'></div>
    <div className='bh-NotificationPopup'>
        <TopSecPopup title='Notification' setClicked={setClicked} />
        <ul className='notifiList'>
            <li className='notifiItem'>
                <WithDrawItem />
            </li>

            <li className='notifiItem'>
                <DepositItem />
            </li>

            <li className='notifiItem logInItem'>
                <NewLogInItem />
            </li>

            <li className='notifiItem'>
                <WithDrawItem />
            </li>

            <li className='notifiItem'>
                <DepositItem />
            </li>

        </ul>

        <div className="viewContainer">
          <button className='viewBtn'>
             View All
             <img src={goRight} alt='goRight' />
          </button>
        </div>
    </div>
  </div>
  )
}

export default AllNotifications