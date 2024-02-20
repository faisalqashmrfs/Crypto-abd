import React from 'react'
import BankImg from "./images/bank.svg"
import MasterCardImg from "./images/mastercard_logo.svg"
import "./BankAccount.css"
import BankAccountMask from '../BankAccountMask/BankAccountMask'
import logo1 from "./images/Logo1.svg"
import logo2 from "./images/Logo2.svg"
import logo3 from "./images/Logo3.svg"
import AddButton from '../AddButton/AddButton'
import KeyImage from "./images/shield-keyhole.svg"
import ChatImg from "./images/chat.svg"
import img6 from "./images/Frame2.svg"
import NotificationSettingPart from '../NotificationSettingPart/NotificationSettingPart'
import SaveChangebtn from '../SaveChangebtn/SaveChangebtn'

function BankAccount() {
    return (
        <div>
            <div className='RO-BankTitle'>
                <div className='RO-BankTitleImg'>
                    <img src={BankImg} alt="Bank Logo" />
                    <h4>Bank Account</h4>
                </div>
                <div> <AddButton/> </div>
            </div>

            <div className='RO-BankBody'>
                {/* black */}
                <div className='RO-BankBlack'>
                    <div>
                    <div className='RO-Flex'>
                        <h4>Current Balance</h4>
                        <img src={MasterCardImg} alt="MasterCard Logo" />
                    </div>
                    <p>$5,750,20</p>
                    </div>
                    <div className='RO-Flex'>
                        <p>5282 3456 7890 1289</p>
                        <p>09/25</p>
                    </div>
                </div>


                {/* Mask */}
                <div className='RO-Flex2'>
                <BankAccountMask background="linear-gradient(168deg, #E42C66 -9.78%, #F55B46 107.04%)" logo={logo1} number="2468" date="12/24" />
                <BankAccountMask background="linear-gradient(177deg, #9C2CF3 -13.49%, #3A49F9 109.75%)" logo={logo2 } number="1289" date="09/25" />
                <BankAccountMask background="linear-gradient(168deg, #12BE73 -9.78%, #F5D946" logo={logo3 } number="2468" date="12/24" />
                </div>
            </div>

            <div id='RO-marginTopBank'>
            <div className="RO-SettingBorder"> <NotificationSettingPart background="#0CAF60" logo={KeyImage} title="UPI Payment" description="nified Payments Interface" height="90px" icon={ <AddButton/>  } /></div>
      <div className="RO-SettingBorder"><NotificationSettingPart background="#F38D2F" logo={ChatImg} title="Creadit & Debit Card" description="purchases using a line of credit." height="90px" icon={ <AddButton/> } /></div>

      <NotificationSettingPart background="#FD4C42" logo={img6} title="Other payment methods" description="Profile Settings" height="90px" icon={ <AddButton/> } />
      </div>



      <SaveChangebtn/>
        </div>
    )
}

export default BankAccount