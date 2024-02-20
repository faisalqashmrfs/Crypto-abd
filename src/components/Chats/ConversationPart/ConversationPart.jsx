import React from 'react'
import "./ConversationPart.css"
import { Component } from 'react'
import Conversation from '../conversation/Conversation';
import avatar from "./images/Avatar.png"


function ConversationPart() {
  return (
    <div>
          <Conversation name="Tom Gravesen" online="Online" img={avatar} />

  
    </div>
  )
}

export default ConversationPart