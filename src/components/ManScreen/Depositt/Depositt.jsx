import React from 'react'
import "./Depositt.css"
import DeposittWithdraw from '../DeposittWithdraw/DeposittWithdraw'
import Network from "../Network/Network"

const Depositt = () => {
  return (
    <div className='AB-page-Depositt'>
        <DeposittWithdraw title="Deposit" Address="true" />
        <Network QrCode="true" />
    </div>
  )
}

export default Depositt