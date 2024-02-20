import React from 'react'
import './TopSecPopup.css'
import cancelImg from '../images/cancelImg.svg'
import moreImg from '../images/moreImg.svg'

const TopSecPopup = ({title, setClicked}) => {
  return (
    <div className='bh-topSecLanguage'>
       <button className='cancelBtn' onClick={() => setClicked(false)}>
         <img src={cancelImg} alt='cancelImg' className='cancelImg'/>
       </button>
       <h5 className='languageTitle'>{title}</h5>
       <img src={moreImg} alt='moreImg' />
 </div>
  )
}

export default TopSecPopup