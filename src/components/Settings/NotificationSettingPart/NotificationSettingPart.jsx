import React from 'react'
import "./NotificationSettingPart.css"

function NotificationSettingPart(props) {
    const { logo, background, title, description,icon ,height} = props
    return (
        <div>
            <div className='RO-NotificationDiv' style={{height:height}} >

                <div style={{ backgroundColor: background }} className='RO-NotificationDivImg'><img src={logo} alt="logo" /></div>

                
                <div className='RO-NotificationDivTitle'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>


                <div className='RO-FlexEndAddBtn'> {icon}</div>

            </div>
        </div>


    )
}

export default NotificationSettingPart