import React from 'react'
import "./BuyBTC.css"
import img1 from "./../img/Slidebar-Green.png"
import img2 from "./../img/Frame-right-arrow.png"
import img3 from "./../img/Slidebar.png"

const BuyBTC = () => {
    return (
        <div className='AB-BuyBTC'>
            <div className='AB-TheBuy'>
                <div className='AB-Title-BuyBTC'>
                    <h1>Buy BTC</h1>
                    <p>0 USDT</p>
                </div>
                <div className='AB-GropBtnSellBtc'>
                    <button>Limit</button>
                    <button>Stop Limit</button>
                    <button>Market</button>
                </div>
                <div className='AB-PriceAmount'>
                    <div className='AB-InputPrice'>
                        <input type="text" placeholder='Price (USDT)' />
                        <button>Best Price</button>
                    </div>
                    <div className='AB-InputAmount'>
                        <input type="text" placeholder='Amount' />
                        <button>Select All</button>
                    </div>
                    <img src={img1} alt="" />
                    <button className='AB-BtnBuyBTC'>Buy BTC <div className='AB-Container-PriceAmount'><img src={img2} alt="" /></div></button>
                </div>
            </div>
            <div className='AB-TheSell'>
                <div className='Ab-Title-SellBtc'>
                    <h1>Sell Btc</h1>
                    <p>0 USDT</p>
                </div>
                <div className='AB-GropBtnSellBtc'>
                    <button>Limit</button>
                    <button>Stop Limit</button>
                    <button>Market</button>
                </div>
                <div className='AB-PriceAmount'>
                    <div className='AB-InputPrice'>
                        <input type="text" placeholder='Price (USDT)' />
                        <button>Select All</button>
                    </div>
                    <div className='AB-InputAmount'>
                        <input type="text" placeholder='Amount' />
                        <button>Select All</button>
                    </div>
                    <img src={img3} alt="" />
                    <button className='AB-BtnSellBtc'>Sell Btc <div className='AB-Container-PriceAmount'><img src={img2} alt="" /></div></button>
                </div>
            </div>
        </div>
    )
}

export default BuyBTC