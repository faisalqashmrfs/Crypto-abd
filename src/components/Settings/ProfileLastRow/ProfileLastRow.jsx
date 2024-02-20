import React from 'react'
import './ProfileLastRow.css'
import LogTimeBox from '../LogTimeBox/LogTimeBox'
import ActionTable from '../ActionTable/ActionTable'
import StatusTable from '../StatusTable/StatusTable'

const ProfileLastRow = () => {

  return (
    <div className='bh-profileLastRow'>
        <div className="bh-settingsLogAction">
            <LogTimeBox title="Security setting logs" />
            <ActionTable />
        </div> {/*End bh-settingsLogTime */}
        <div className="bh-settingsLogStatus">
            <LogTimeBox title="Login logs" />
            <StatusTable />
        </div> {/*End bh-settingsLogStatus */}
    </div>
  )
}

export default ProfileLastRow