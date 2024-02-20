import React from 'react'
import DeposittWithdraw from '../DeposittWithdraw/DeposittWithdraw'
import Network from "../Network/Network"
import "./Withdraw.css"

const Withdraw = () => {
  return (
    <div className='AB-page-Withdraw'>
        <DeposittWithdraw title="Withdraw" WithdrawAddress="true" />
        <Network ScanQR="true" />
    </div>
  )
}

export default Withdraw