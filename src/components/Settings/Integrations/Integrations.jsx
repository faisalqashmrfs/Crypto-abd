import React from 'react'
import './Integrations.css'
import Githup from "./images/githup.svg"
import figma from "./images/figma.svg"
import slackLogo from "./images/slack.svg"
import LinearLogo from "./images/linear.svg"
import discord from "./images/discord.svg"
import zapier from "./images/zapier.svg"
import githup2 from "./images/githup2.svg"
import telegram from "./images/telegram.svg"
import google from "./images/google.svg"
import evernote from "./images/evernote.svg"
import loadMore from "./images/more-square.svg"

import IntergrationBox from '../IntergrationBox/IntergrationBox'
import SettingsTitle from '../Common/SettingsTitle/SettingsTitle'


const Integrations = () => {
  return (
    <div className='integrations'>
      
      <SettingsTitle title="Integrations " />

      <div className='RO-IntergrationBody'>

      <IntergrationBox image={Githup} name="GitHub " text="For your account security" />
      <IntergrationBox image={figma} name="Figma" text="Figma is a collaborative design tool." />
      <IntergrationBox image={slackLogo} name="Slack " text="For your account security" />
      <IntergrationBox image={LinearLogo} name="Linear" text="Streaming software projects, sprints, and bug tracking." />
      <IntergrationBox image={discord} name="Discord" text="Discord is a VoIP messaging social platform." />
      <IntergrationBox image={zapier} name="zapier " text="Builf custom automations and integrations with apps" />
      <IntergrationBox image={Githup} name="GitHub " text="For your account security" />
      <IntergrationBox image={figma} name="Figma" text="Figma is a collaborative design tool." />
      <IntergrationBox image={telegram} name="Telegram" text="Telegram is a cloud-based instant messaging service." />
      <IntergrationBox image={google} name="GitHub " text="Google focuses on search engine technology" />
      <IntergrationBox image={evernote} name="Evernote" text="Evernote is a notetaking / task management application. " />
      <IntergrationBox image={githup2} name="GitHub" text="develop, secure, and operate  in a single application. " />

    </div>

    <button id='RO-IntergrationButton'><img src={loadMore} alt="loadmore" />Load More</button>



    </div>
  )
}

export default Integrations