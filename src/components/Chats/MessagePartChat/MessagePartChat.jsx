import React from 'react'
import "./MessagePartChat.css"
import SearhIcon from "./images/searhIcon.png"
import Message from '../Message/Message'
import BrabeImg from "./images/brabe.png"
import TomImg from "./images/tom.png"
import jaroImg from "./images/jaro.png"
import jaro2 from "./images/jaro2.png"
import ErfanImg from "./images/amade.png";
import { NavLink } from 'react-router-dom'
import avatar2 from "./images/Avatar2.svg"





function MessagePartChat() {
    return (
        <div className='RO-MessagePartChat'>

            {/* title */}
            <div className='RO-MessagePartChatTitle'>
                <h4>Message</h4>
                {/* <input type="text"/>    */}
                <img src={SearhIcon} alt="searchIcon" />

            </div>

            <div>
                <NavLink to="jaroMessage"><Message name="Jaroslav Brabe" work="Support Admin" img={BrabeImg} number="6" date="Now" text="Hey Cak, Could you free now ? Can you look and read the brief first…" />
                </NavLink>

                <NavLink to="tom">            <Message name="Tom Gravesen" work="Support Admin" img={avatar2} visible="none" date="Now" text="Hey Cak, Could you free now ? Can you look and read the brief first…" />
                </NavLink>

                <NavLink to="jaroslav">            <Message name="Jaroslav " work="Support Admin" img={jaroImg} number="2" date="Today" text="Hey Cak, Could you free now ? Can you look and read the brief first…" />
                </NavLink>

                <NavLink to="brabe">            <Message name="Jaroslav Brabe" work="Support Admin" img={jaro2} visible="none" date="Wed" text="Hey Cak, Could you free now ? Can you look and read the brief first…" />
                </NavLink>
                <NavLink to="Erfan">            <Message name="Erfan Amade" work="Support Admin" img={ErfanImg} visible="none" date="Now" text="Hey Cak, Could you free now ? Can you look and read the brief first…" />
                </NavLink>

            </div>
        </div>
    )
}

export default MessagePartChat