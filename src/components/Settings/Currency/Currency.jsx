import React from 'react'
import './Currency.css'
import SettingsTitle from '../Common/SettingsTitle/SettingsTitle'
import PopularCurrencies from '../PopularCurrencies/PopularCurrencies'

const Currency = () => {
  return (
    <div className='bh-currency'>
      <SettingsTitle title="Currency Preferences" />
      <PopularCurrencies />
    </div>
  )
}

export default Currency