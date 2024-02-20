import React, { useState } from 'react'
import './ProfileSecondRow.css'
import mailAddress from '../Images/mailAddress.svg'
import phoneIcon from '../Images/phoneIcon.svg'
import googleIcon from '../Images/passIcon.svg'
import servicesIcon from '../Images/servicesIcon.svg'
import ProfileInfoBox from '../ProfileInfoBox/ProfileInfoBox'
import ProfileInfoEnable from '../ProfileInfoEnable/ProfileInfoEnable'

const ProfileSecondRow = () => {

  const [enablePhone, setEnablePhone] = useState(false)
  const [enableGoogle, setEnableGoogle] = useState(false)

  return (
    <div className='bh-ProfileSecondRow'>
      <ProfileInfoBox 
                      profileInfoImg={mailAddress} 
                      title="Email Address" 
                      para="erf*****@gmail.com"/>

      <ProfileInfoEnable 
                      icon={phoneIcon} 
                      title="Phone" 
                      btnContent={enablePhone} 
                      setBtnContent={setEnablePhone} />
     
      <ProfileInfoEnable 
                      icon={googleIcon} 
                      title="Google Verification" 
                      btnContent={enableGoogle} 
                      setBtnContent={setEnableGoogle} />

      <ProfileInfoBox profileInfoImg={servicesIcon}
                      title="API Services"
                      para=" Trade digital assets with leverage
                             on Whlae.IO Broker."/>

      <ProfileInfoBox profileInfoImg={servicesIcon}
                      title="Margin Trading"
                      para=" Trade digital assets with leverage
                           on Whlae.IO Broker."/>

      <ProfileInfoBox profileInfoImg={servicesIcon}
                      title="Margin Trading"
                      para=" Trade digital assets with leverage
                             on Whlae.IO Broker."/>
      

    </div>
  )
}

export default ProfileSecondRow