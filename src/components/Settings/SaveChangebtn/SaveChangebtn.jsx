import React from 'react'
import "./SaveChangebtn.css"

function SaveChangebtn(props) {
    const{date ,head}=props
  return (
    <div className='RO-SaveChangeBtn'>

        <div className='RO-Date'>
          <p>{head}</p>
         <p>{date}</p></div>
        <div className='RO-ButtonsSaveCancel'>
            <button id='RO-cancel'>Cancel</button>
            <button id='RO-save'>Save Changes</button>
        </div>
    </div>
  )
}

export default SaveChangebtn