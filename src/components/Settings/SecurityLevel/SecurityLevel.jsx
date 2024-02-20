import React from 'react'
import './SecurityLevel.css'
import securityLevel from '../Images/securityLevel.svg'
import QuestionIcon from '../Images/QuestionIcon.svg'

const SecurityLevel = () => {
  return (
    <div className="bh-levelWrapper">
       <img src={securityLevel} alt="securityLevel" className='securityLevelIcon'/>
       <div className="securityLevelBox">
          <div className="levelQuestion">
            <span className='securitySpan'>Security Level</span>
            <img src={QuestionIcon} alt="QuestionIcon" className="questionIcon"/>
          </div>
          <span className='lowSpan'>Too Low!</span>
        </div>
    </div>
  )
}

export default SecurityLevel