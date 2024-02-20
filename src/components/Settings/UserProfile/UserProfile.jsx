import React from 'react'
import './UserProfile.css'
import ProfileFirstRow from '../ProfileFirstRow/ProfileFirstRow'
import ProfileSecondRow from '../ProfileSecondRow/ProfileSecondRow'
import ProfileLastRow from '../ProfileLastRow/ProfileLastRow'

const UserProfile = () => {
  return (
    <div className='bh-userProfile'>
        <ProfileFirstRow />
        <ProfileSecondRow />
        <ProfileLastRow />
    </div>
  )
}

export default UserProfile