import React from 'react'
import "./KYCPersonalInfoPart.css"

function KYCPersonalInfoPart(props) {
    const { image, Placeholder } = props;
    return (
        <div>

            <div className='RO-inputContainer'>
                <img src={image} alt="inputIcon" />
                <span className='spanInput'></span>
                <input type="text" placeholder={Placeholder}/>
            </div>

        </div>
    )
}

export default KYCPersonalInfoPart