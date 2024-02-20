import React from 'react'
import logo from "./images/uploadIcon.svg"
import "./IDCard.css"

function IDCard(props) {
    const{paragraph,title}=props
  return (
    <div className='RO-IDCard'>
        <h5>{title}</h5>
        <div>
        <img src={logo} alt="logo" />
        
        <h4>Drop Your Files Here</h4>
        <p>{paragraph}</p>
        </div>
        <button>Browse</button>

    </div>
  )
}

export default IDCard