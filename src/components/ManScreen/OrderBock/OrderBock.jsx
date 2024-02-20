import React from 'react'
import "./OrderBock.css"
import Table from '../Table/Table'

const OrderBock = () => {
  return (
    <div>
        <Table div4="true" />
        <div className='AB-Tfoot'>
          <p>270.535</p>
          <span>≈ 270.56 USD</span>
        </div>
        <Table div5="true" />
    </div>
  )
}

export default OrderBock