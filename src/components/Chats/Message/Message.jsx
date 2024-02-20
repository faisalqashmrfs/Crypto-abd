import React from 'react'
import "./Message.css"


function Message(props) {
    const { name, work, img, number, date, text, visible } = props;


    return (
        <div className='RO-MessagePart'>

            {/* title */}
            <div className='RO-MessagePartTitle'>
                <div className='RO-MessagePartFlexImg'>
                    <img src={img} alt="img" />
                    <div>
                        <h4>{name}</h4>
                        <p>{work}</p>
                    </div>
                </div>
                <div className='RO-MessagePartFlexDate'>
                    <h5 style={{ display: visible }}>{number}</h5>
                    <p >{date}</p>
                </div>
            </div>

            <p className='RO-MessagePartText'>{text}</p>

        </div>
    )
}

export default Message