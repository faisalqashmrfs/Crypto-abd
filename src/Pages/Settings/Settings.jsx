import React from 'react'
import './Settings.css'
import SettingsList from '../../components/Settings/SettingsList/SettingsList'
import { Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div className='settings'>
        <SettingsList />
        <Outlet />
    </div>
  )
}

export default Settings