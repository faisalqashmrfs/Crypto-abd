import React from 'react'
import './Payment.css'
import BankAccount from '../BankAccount/BankAccount'
import SettingsTitle from '../Common/SettingsTitle/SettingsTitle'

const Payment = () => {
  return (
    <div className='payment'>
      <SettingsTitle title="Payment"/>
      <BankAccount/>
    </div>
  )
}

export default Payment