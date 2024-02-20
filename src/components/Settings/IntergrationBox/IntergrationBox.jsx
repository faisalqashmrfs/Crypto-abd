import React from 'react'
import SettingIconToggle from '../Common/SettingIconToggle/SettingIconToggle'
import "./IntergrationBox.css"

function IntergrationBox(props) {
    const { image, name,text } = props
    return (
        <div className='RO-IntergrationBox'>
            <div className='RO-IntergrationBoxTitle'>
                <div className='RO-IntergrationBoxImg'>
                    <img src={image} alt="logo" />
                    <p>{name}</p>
                </div>
                <div><SettingIconToggle /></div>
            </div>

            <p id='RO-IntergrationBoxText'>{text}</p>
        </div>
    )
}

export default IntergrationBox