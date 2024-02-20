import React from 'react'
import "./Trade.css"
import OrderBock from "./../OrderBock/OrderBock"
import Candlestick from "./../Candlestick/Candlestick"
import BuyBTC from './../BuyBTC/BuyBTC'
import Table from './../Table/Table'
import BT from "./../img/Group 47811-b-t.png"

const Trade = () => {
  return (
    <div className='AB-Trade'>
      <div className='AB-BTCUSDT'>
        <div className='AB-BTCUSDT-Card'>
          <img src={BT} alt="" />
          <div className='AB-BTCUSDT-TCard'>
            <div className='AB-BTCUSDT-TCardAndSpan'>BTC/USDT<span>3.5X</span></div>
            <p>Bitcoin</p>
          </div>
        </div>
        <div className='AB-BTCUSDT-Card'>
          <div className='AB-BTCUSDT-TCard'>
            <div className='AB-BTCUSDT-TCardAndSpan'>$1,134.86<span>3.36%</span></div>
            <p>Price</p>
          </div>
        </div>
        <div className='AB-BTCUSDT-Box'>
          <p>23653.4</p>
          <span>Mark</span>
        </div>
        <div className='AB-BTCUSDT-Box'>
          <p>23,662.3</p>
          <span>Index</span>
        </div>
        <div className='AB-BTCUSDT-Box'>
          <p>23,662.3</p>
          <span>24h Change</span>
        </div>
        <div className='AB-BTCUSDT-Box'>
          <p>24,400.0</p>
          <span>24h High</span>
        </div>
        <div className='AB-BTCUSDT-Box'>
          <p>24,400.0</p>
          <span>24h Low</span>
        </div>
      </div>
      <div className='AB-FirstTrade'>
        <OrderBock />
        <Candlestick />
        <BuyBTC />
      </div>
      <div className='AB-TableGropBtn'>
        <div className='AB-GropBtn-TradeTheOrder'>
          <button>Open Orders</button>
          <button>Order History</button>
          <button>Market trades</button>
        </div>
        <Table div6="true" />
      </div>
    </div>
  )
}

export default Trade