import React from 'react'
import "./SettingIconToggle.css"

function SettingIconToggle() {

  return (
    <div> 
      <label className='RO-switch'>
        <div>
          <input className='checkboxInput' type="checkbox" ></input>
          <span className='RO-slider'>  </span>
        </div>
      </label>
    </div>
  
  )
}

export default SettingIconToggle