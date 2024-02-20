import TitleOfPersonalInfo from '../TitleOfPersonalInfo/TitleOfPersonalInfo'
import ProfileForm from '../ProfileForm/ProfileForm'
import './PersonalInfo.css'


const PersonalInfo = () => {

 
  return (
    <div className='personalInfo'>
       <TitleOfPersonalInfo />
       <ProfileForm/>
    </div>
  )
}

export default PersonalInfo