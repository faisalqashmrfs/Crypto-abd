import React from 'react'
import "./BankAccountMask.css"
import Point from "./images/whitePoint.svg"

function BankAccountMask(props) {
    const{background,logo,number,date}=props
  return (
    <div style={{backgroundImage:background}} className='RO-bankMaskBase'>
    <div className='RO-BankAccountMask' >

         <div ><img src={logo} alt="logo" /></div>
         <div >
            <h4>Credit Card</h4>
            <div className='RO-BankAcoountPoints'>
                <img src={Point} alt="circle" />
                <img src={Point} alt="circle" />
                <img src={Point} alt="circle" />
                <img src={Point} alt="circle" />
                <span>{number}</span>
            </div>
         </div>
         <div className='RO-BankAccountMaskDate'>{date}</div>
    </div>
    </div>
  )
}

export default BankAccountMask