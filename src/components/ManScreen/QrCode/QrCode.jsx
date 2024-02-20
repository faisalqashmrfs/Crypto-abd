import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import qrImage from './../img/Group-B.png';
import "./QrCode.css"

const QrCode = () => {
    const text = 'bc1qXY2kGdygjrsq';
    return (
        <div className='AB-QRCode'>
            <h3>BTC Address</h3>
            <div style={{ borderRadius: '25px', overflow: 'hidden', background: 'transparent' }}>
                <QRCode value={text} logoImage={qrImage} logoWidth={50} logoHeight={50} bgColor="transparent" fgColor="#FFFFFF" size={260}
                />
            </div>
        </div>
    );
}

export default QrCode;