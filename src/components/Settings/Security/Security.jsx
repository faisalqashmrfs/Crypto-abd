import React from 'react'
import './Security.css'
import SettingsTitle from '../Common/SettingsTitle/SettingsTitle'
import PasswordForm from '../PasswordForm/PasswordForm'

const Security = () => {
  return (
    <div className='security'>
      <SettingsTitle title="Security" />
      <PasswordForm />
    </div>
  )
}

export default Security