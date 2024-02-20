import React, {useState} from 'react'
import './Language.css'
import englishFlag from '../images/englishFlag.svg'
import germanFlag from '../images/germanFlag.svg'
import frenchFlag from '../images/frenchFlag.svg'
import chinaFlag from '../images/chinaFlag.svg'
import swedishFlag from '../images/swedishFlag.svg'
import spainFlag from '../images/spainFlag.svg'
import selectedImg from '../images/selectedImg.svg'
import TopSecPopup from '../TopSecPopup/TopSecPopup'

const Language = ({setClicked}) => {

    const [checked, setChecked] = useState({
        english: true,
        german: false,
        french: false,
        chinese: false,
        swedish: false,
        spanish: false
    })

  return (
    <>
      <div className='bh-languageOverlay'></div>
      <div className='bh-language'>
        <TopSecPopup title='Select Language' setClicked={setClicked} />
        <div className='bottomSec'>
            <div className="langugeBox">
                <div className={`flagContainer ${checked.english ? 'active' : ''}`}
                     onClick={() => setChecked({checked, english: !checked.english})} >
                    <img src={selectedImg} alt='selectedImg' className='selected'/>
                    <img src={englishFlag} alt="countryFlag" className='languageFlag'/>
                </div>
                <p className='languageName'>English</p>
            </div>

            <div className="langugeBox">
                <div className={`flagContainer ${checked.german ? 'active' : ''}`}
                     onClick={() => setChecked({checked, german: !checked.german})} >
                    <img src={selectedImg} alt='selectedImg' className='selected'/>
                    <img src={germanFlag} alt="countryFlag" className='languageFlag'/>
                </div>
                <p className='languageName'>German</p>
            </div>

            <div className="langugeBox">
                <div className={`flagContainer ${checked.french ? 'active' : ''}`}
                     onClick={() => setChecked({checked, french: !checked.french})} >
                    <img src={selectedImg} alt='selectedImg' className='selected'/>
                    <img src={frenchFlag} alt="countryFlag" className='languageFlag'/>
                </div>
                <p className='languageName'>French</p>
            </div>

            <div className="langugeBox">
                <div className={`flagContainer ${checked.chinese ? 'active' : ''}`}
                     onClick={() => setChecked({checked, chinese: !checked.chinese})} >
                    <img src={selectedImg} alt='selectedImg' className='selected'/>
                    <img src={chinaFlag} alt="countryFlag" className='languageFlag'/>
                </div>
                <p className='languageName'>Chinese</p>
            </div>

            <div className="langugeBox">
                <div className={`flagContainer ${checked.swedish ? 'active' : ''}`}
                     onClick={() => setChecked({checked, swedish: !checked.swedish})} >
                    <img src={selectedImg} alt='selectedImg' className='selected'/>
                    <img src={swedishFlag} alt="countryFlag" className='languageFlag'/>
                </div>
                <p className='languageName'>Swedish</p>
            </div>
           
            <div className="langugeBox">
                <div className={`flagContainer ${checked.spanish ? 'active' : ''}`}
                     onClick={() => setChecked({checked, spanish: !checked.spanish})} >
                    <img src={selectedImg} alt='selectedImg' className='selected'/>
                    <img src={spainFlag} alt="countryFlag" className='languageFlag'/>
                </div>
                <p className='languageName'>Spanish</p>
            </div>

        </div>

      </div>
    </>
  )
}

export default Language