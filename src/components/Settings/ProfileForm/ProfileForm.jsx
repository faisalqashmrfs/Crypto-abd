import React, { useState, useEffect } from 'react'
import './ProfileForm.css'
import fisrtNameIcon from '../Images/fisrtNameIcon.svg'
import lastNameIcon from '../Images/lastNameIcon.svg'
import displayIcon from '../Images/displayIcon.svg'
import atIcon from '../Images/atIcon.svg'
import mailIcon from '../Images/mailIcon.svg'
import locationIcon from '../Images/locationIcon.svg'
import bottomArrow from '../Images/bottomArrow.svg'

const ProfileForm = () => {

const [countries, setCountries] = useState([])
const [filterData, setFilterData] = useState([])
const [selectedCountry, setSelectedCountry] = useState();
const [active, setActive] = useState(false)

const getCountries = async() => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const data= await response.json()
  setCountries(data)
  setFilterData(data)
}

useEffect(() => {
  getCountries()
}, [])

console.log(countries)

 //Find selected country data
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  })

  //filter data for search box
  const handleFilter = (value) => {
    const res = filterData.filter(f => f.name.common.toLowerCase().includes(value))
    setCountries(res)
  }
  return (
    <div className='bh-profileForm'>
        <p className='formTitle'>Personal Information</p> 
        <form action=''>
          <div className="topFormInfo">
            <div className='bh-inputContainer'>
               <img src={fisrtNameIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='First Name' name="firstName"/>
            </div>

            <div className='bh-inputContainer'>
               <img src={lastNameIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='Last Name' name="lastName" />
            </div>

            <div className='bh-inputContainer'>
               <img src={displayIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='Display Name' name="displayName"/>
            </div>

            <div className='bh-inputContainer'>
               <img src={atIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder='User Name' name="userName"/>
            </div>
          </div> {/*End topFormInfo */}
          
           <p className='contactTitle'>Contact Info</p> 

          <div className="contactWrapper">
             <div className='bh-inputContainer'>
               <img src={mailIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder="Email Address" name="email"/>
             </div> {/*End bh-inputContainer */}

             <div className='bh-inputContainer'>
               <img src={atIcon} alt="inputIcon" />
               <span className='spanInput'></span>
               <input className='textInput' type="text" placeholder="Currency" name="currency"/>
             </div> {/*End bh-inputContainer */}

             <div className='bh-selectLocation'>
               <img src={locationIcon} alt="inputIcon" />
               <span></span>
               <select className='selectBox' value={selectedCountry}
                       onChange={(e) => setSelectedCountry(e.target.value)}>
      
                    <option hidden>Location</option>
                      {
                        countries.map((item,index) => (
                           <option key={index} value={item.name.common}>{item.name.common}</option>
                        ))
                      }
             
               </select>
               <div className="selectIcon">
                     <img src={bottomArrow} alt="bottomArrow" />
               </div>
             </div> {/*End bh-selectLocation */}

             <div className='bh-selectPhone'>
                <div className="selected-option" onClick={() => setActive(!active)}>
                    <div>
                      <img 
                         src={searchSelectedCountry ?
                             searchSelectedCountry.flags.png 
                            : 
                             'https://flagcdn.com/w320/sy.png'}
                         alt="countryFalg"
                         className='countryFalg'/>

                         <img src={bottomArrow} alt="bottomArrow" />
                     </div>
                    <input type="tel" name="tel" placeholder="Phone Number" />
                </div> {/* End selected-option */}
                <div className={`options ${active ? "active" : ""}`}>
                  <input type='text' 
                         className='searchBox' 
                         placeholder='search country' 
                         onChange={e => handleFilter(e.target.value)} />
           
                  <ol>
                    {
                     countries.map((country,index) => (
                        <li className='option' key={index}>
                          <div className="leftSecOption">
                            <img src={country.flags.png} alt="flag" className='flagImg'/>
                            <span className='countryName'>{country.name.common}</span>
                          </div> {/* End leftSecOption */}
                          <span className='internationalNum'>{country.idd.root + country.idd.suffixes}</span>
                        </li>
                     ))
                    }
                 </ol>
                 
                </div> {/* End options */}
             </div> {/*End bh-selectPhone */}

          </div> {/*End contactWrapper */}

           <div className="rowOfBtns">
              <div className="dateContainer">
                 <p className="dateLabel">Account Created at :</p>
                 <p className='accountDate'>Tuesday - 2022 30 August</p>
              </div>
              <div className="btnContainer">
                <button className='cancelBtn'>Cancel</button>
                <button className='saveBtn' type='submit'>Save Changes</button>
              </div>
           </div>
        </form>
        
    </div>
  )
}

export default ProfileForm
        