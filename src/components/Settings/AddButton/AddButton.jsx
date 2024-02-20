import React from 'react'
import image from "./image/Add.svg"
import "./AddButton.css"
function AddButton() {
    return (
        <div className='RO-ButtonAdd'>
            <img src={image} alt="logo" />
            <span>Add</span>
        </div>
    )
}

export default AddButton