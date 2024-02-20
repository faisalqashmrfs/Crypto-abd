import React from 'react'
import "./Inbox.css"
import MessagePartChat from '../../components/Chats/MessagePartChat/MessagePartChat'
import ConversationPart from '../../components/Chats/ConversationPart/ConversationPart';


const Inbox = () => {
  return (
    <div className='RO-inbox'>

      {/* messages */}
      <div>

        <MessagePartChat />

      </div>

      <div>
  
        <ConversationPart />
      </div>




    </div>
  )
}

export default Inbox