import React from 'react'
import img1 from "./../img/error-warning-line.svg"
import img2 from "./../img/Time.svg"
import QrCode from './../QrCode/QrCode'
import img3 from "./../img/Warning.svg"
import img4 from "./../img/QR-Code-Scan.png"
import "./Network.css"

const Network = (props) => {
    return (
        <div className='AB-Network'>
            <span className='AB-title-Network'>
                Deposit Network
                <img src={img1} alt="" />
            </span>
            <div className='AB-group-btns'>
                <button>BTC</button>
                <button>BEP2</button>
                <button>BEP20 (BSC)</button>
                <button>RRC20</button>
            </div>
            <p className='AB-Average-Time'>
                <img src={img2} alt="" />
                Average Arrival Time :
                <span>3 Minutes</span>
            </p>
            {props.QrCode &&<QrCode />}
            {props.ScanQR &&<div className='AB-Scan-QR-code'>
                <h3>Scan QR code</h3>
                <img src={img4} alt="" />
            </div>}
            <div className='AB-Warning'>
                <img src={img3} alt="" />
                <h3>Send Only BTC to this Address !</h3>
                <p>Sending coin or token other than BTC to this Address may reault in the los of your deposit.</p>
            </div>
        </div>
    )
}

export default Network