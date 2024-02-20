import React, { useState } from 'react'
import './LogTimeBox.css'

const LogTimeBox = ({title}) => {

const [timeClicked, setTimeClicked] = useState({
    all: false,
    oneM: false,
    sixM: false,
    oneY: false,
    ytd: false
})

  return (
    <div className="bh-logTimeWrapper">
                <h4 className='logTimeTitle'>
                    {title}
                </h4>
                <div className="timeBox">
                    <button 
                        className={`timeBtn ${timeClicked.all ? 'active' : ''}`}
                        onClick={() => setTimeClicked(() => ({timeClicked, all: !timeClicked.all}))}
                        >
                        All
                    </button> 
    
                    <button 
                        className={`timeBtn ${timeClicked.oneM ? 'active' : ''}`}
                        onClick={() => setTimeClicked(() => ({timeClicked, oneM: (!timeClicked.oneM)}))}
                        >
                        1M
                    </button>

                    <button 
                        className={`timeBtn ${timeClicked.sixM ? 'active' : ''}`}
                        onClick={() => setTimeClicked(() => ({timeClicked, sixM: (!timeClicked.sixM)}))}
                        >
                        6M
                    </button>
                   <button 
                        className={`timeBtn ${timeClicked.oneY ? 'active' : ''}`}
                        onClick={() => setTimeClicked(() => ({timeClicked, oneY: (!timeClicked.oneY)}))}
                        >
                        1Y
                    </button>
                     <button 
                       className={`timeBtn ${timeClicked.ytd ? 'active' : ''}`}
                       onClick={() => setTimeClicked(() => ({timeClicked, ytd: (!timeClicked.ytd)}))}
                       >
                        YTD
                    </button>
                </div> {/*End timeBox */}
            </div> 
  )
}

export default LogTimeBox