import React, { useState } from 'react'
import './PasswordForm.css'
import SecurityInfo from '../SecurityInfo/SecurityInfo'
import securityPassIcon from '../Images/securityPassIcon.svg'
import securityMail from '../Images/securityMail.svg'
import securitySms from '../Images/securitySms.svg'
import passIcon from '../Images/passIcon.svg'
import SecurityLevel from '../SecurityLevel/SecurityLevel'

const PasswordForm = () => {

  const [securityData, setSecurityData] = useState({
     login: false,
     email: false,
     sms: false,
     password: false,
     trade: false
  })

  return (
    <div className='bh-PassFormWrapper'>
      <form action='' className='passFormWrapper'>
          <div className="fieldsFormWrapper">
             <p className='passTitle'>Password Management</p>
             <div className="passwordInfo">
                <SecurityInfo 
                     icon={securityPassIcon}
                     title="Login 2-Step Verification"
                     para="The Login 2step Verification adds an extra layer of security to your account."/>
                <button className={`passBtn ${securityData.login ? 'enable' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setSecurityData((prevState) => ({...prevState, login:(!securityData.login )}))
                    }}>
                    {securityData.login ? "Enable" : "Disable"}
                </button>
             </div> {/*End passwordInfo */}

             <div className="passwordInfo">
                <SecurityInfo 
                        icon={securityMail}
                        title="Email Setup"
                        para="Please enter your email correctly"/>
                <button className={`passBtn ${securityData.email ? 'enable' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setSecurityData((prevState) => ({...prevState, email:(!securityData.email )}))
                    }}>
                    {securityData.email ? "Enable" : "Disable"}
                </button>
             </div> {/*End passwordInfo */}

             <div className="passwordInfo">
                <SecurityInfo 
                       icon={securitySms}
                       title="SMS Setup"
                       para="For your security"/>
                <button className={`passBtn ${securityData.sms ? 'enable' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setSecurityData((prevState) => ({...prevState, sms:(!securityData.sms )}))
                    }}>
                    {securityData.sms ? "Enable" : "Disable"}
                </button>
             </div> {/*End passwordInfo */}
          </div> {/*End fieldsFormWrapper */}

          <div className="fieldsFormWrapper withBorder">
             <p className='passTitle'>Password Management</p>
             <div className="passwordInfo">
                <SecurityInfo 
                     icon={passIcon}
                     title="Password"
                     para="When resetting your password, you will be logged out automatically"/>
                <button className='passBtn'
                  onClick={(e) => {
                    e.preventDefault()
                    setSecurityData((prevState) => ({...prevState, password:(!securityData.password )}))
                    }}>
                    Change
                </button>
             </div> {/*End passwordInfo */}

             <div className="passwordInfo">
                <SecurityInfo  
                       icon={passIcon}
                       title="Trade Password"
                       para="To protect your assets."/>
                <button className={`passBtn ${securityData.trade ? 'enable' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setSecurityData((prevState) => ({...prevState, trade:(!securityData.trade )}))
                    }}>
                    {securityData.trade ? "Enable" : "Disable"}
                </button>
             </div> {/*End passwordInfo */}

          </div> {/*End fieldsFormWrapper */}

          <div className="submitRow">
            <SecurityLevel />

            <div className="submitBtns">
              <button className="securityCancel">Cancel</button>
              <button className="securitySave" type='submit'>Save Changes</button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default PasswordForm