import React from 'react'
import './Verification.css'
import KYCPersonalInfoPart from '../KYCPersonalInfoPart/KYCPersonalInfoPart'
import eyephoto from "./images/eye.svg"
import emailPhoto from "./images/email.svg"
import framephot from "./images/frame.svg"
import personePhoto from "./images/person.svg"
import IDCard from '../IDCard/IDCard'
import SaveChangebtn from '../SaveChangebtn/SaveChangebtn'
import SettingsTitle from '../Common/SettingsTitle/SettingsTitle'


const Verification = () => {
  return (
    <div className='verification'>
            <SettingsTitle title="Notification"/>
            
            <div className='RO-VerificationPersonal'>
                <h4>Personal Informations</h4>
                <div className='RO-VerificationGrid'>
                  <KYCPersonalInfoPart image={framephot} Placeholder="ID Number"/>
                  <KYCPersonalInfoPart image={personePhoto} Placeholder="Full Name on Card"/>
                  <KYCPersonalInfoPart image={eyephoto} Placeholder="Display Name"/>
                  <KYCPersonalInfoPart image={emailPhoto} Placeholder="User Name"/>
                </div>
            </div>

            <div className='RO-Verfication2'>
              <h3>Upload ID Card</h3>
              
              <div className='RO-VerificationIDPart'>

                <IDCard title="ID Card Front Side" paragraph="Maximum size of image 1mb" />
                <IDCard title="ID Card Back Side" paragraph="Maximum size of image 1mb" />
                <IDCard title="Selfie with identity" paragraph="please make sure that every detail of the ID document is clearly visible." />
              </div>
            </div>


            <SaveChangebtn head="Account Created at :" date="Tuesday - 2022 30 August" />
          

    </div>
  )
}

export default Verification