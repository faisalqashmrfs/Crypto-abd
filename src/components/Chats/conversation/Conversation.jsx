import React from 'react'
import videoimg from "./images/videoicon.svg"
import "./Conversation.css"
import callimg from "./images/callIcon.svg"
import pointimg from "./images/point.svg"
import message1 from "./images/mesage1.png"
import message2 from "./images/message2.png"
import message3 from "./images/message3.png"
import message4 from "./images/message4.png"
import message5 from "./images/message5.png"
import message6 from "./images/message6.png"
import text from "./images/Text.svg"
import tex1 from "./images/Text1.svg"
import tex2 from "./images/Text2.svg"
import tex3 from "./images/Text3.svg"
import tex4 from "./images/Text4.svg"
import image1 from "./images/Image1.png"
import image2 from "./images/Image2.png"
import image3 from "./images/Image3.png"
import image4 from "./images/Image4.png"
import image5 from "./images/Image5.png"
import image6 from "./images/Image6.png"
import emoji from "./images/Emoji.svg"
import add from "./images/Add.svg"
import sendimg from "./images/Send.svg"
import separator from "./images/Seperator.svg"
import avatar2 from "./images/Avatar2.svg"
import moreIc from "./images/More.svg"
import videoIc from "./images/VideoIc.svg"
import soundIc from "./images/SoundIc.svg"
import fillIc from "./images/FilleIc.svg"
import callIc from "./images/Call-Icon.svg"
import VidIc from "./images/Video-Call-Icon.svg"
import closeIc from "./images/Close.svg"





function Conversation(props) {
   
    const { img, name, online, date } = props;
    return (
        <div className='RO-conversation'>
            {/* left part */}
            <div>
                {/* title */}
                <div className='RO-conversationTitle'>
                    <div className='RO-conversationTitleImg' >
                        <img src={avatar2} alt="" />
                        <div>
                            <h4>{name}</h4>
                            <p>{online}</p>
                        </div>
                    </div>
                    <div className='RO-conversationTitleIcon'>
                        <img src={VidIc} alt="" />
                        <img src={callIc} alt="" />
                        <img src={moreIc} alt="" />
                    </div>
                </div>

                {/* body */}
                <div className='RO-conversationBody'>

              <div>  <p >Today, 8:26 AM</p></div>
                    <div><img src={message1} alt="" /></div>
                    <div><img src={message2} alt="" /></div>
                    <div className='RO-conversationBodyText'><img src={tex1} alt="" /></div>
                    <div className='RO-conversationBodyRight'><img src={message3} alt="" /></div>
                    <div className='RO-conversationBodyRight'><img src={message4} alt="" /></div>
                    <div className='RO-conversationBodyRight RO-conversationBodyText'><img src={tex2} alt="" /></div>
                    <div><img src={message5} alt="" /></div>
                    
                    <div className='RO-conversationBodyRight' ><img src={message6} alt="" /></div>
                    <div className='RO-conversationBodyRight RO-conversationBodyText'><img src={tex3} alt="" /></div>


                    <div className='RO-conversationBodySend'>
                        <div>
                        <img src={emoji} alt="" />
                        <img src={add} alt="" />
                        <img src={separator} alt="" />
                        
                        <input type="text" name="send" id="" placeholder='  Type Something ...' />
                        </div>
                        <img src={sendimg}alt="" />
                    </div>



                </div>
            </div>



            {/* rightleft */}
            <div className='RO-conversationRight'>
                {/* title */}
                <div className='RO-conversationRightTitle'>
                    <h4>User Info</h4>
                <img src={closeIc} alt="" />
                </div>
                <div className='RO-conversationRightImg'>
                    <img src={avatar2} alt="" />
                    <h4>{name}</h4>
                    <p>{online}</p>
                </div>

                <div className='RO-conversationRightFile'>

                    <div className='RO-conversationRightFileHead'>
                        <h5>Shared Files</h5>
                        <p>view all</p>
                    </div>

                    <div >

                        <div className='RO-conversationRightFileSection'>
                            <div>
                                <img src={videoIc} alt="" />
                              

                            </div>
                            <div>
                                <h5>What’s Bons..</h5>
                                <p>50.3 Mb</p>
                            </div>
                        </div>
                        <div className='RO-conversationRightFileSection'>
                            <div><img src={fillIc} alt="" /></div>
                            <div>
                                <h5>Project Overview next..</h5>
                                <p>146.5 Kb</p>
                            </div>
                        </div>
                        <div className='RO-conversationRightFileSection'>
                            <div><img src={soundIc} alt="" /></div>
                            <div>
                                <h5>Testimonial for users..</h5>
                                <p>50.3 Mb</p>
                            </div>
                        </div>
                        

                    </div>


                </div>


                <div className='RO-conversationRightImages'>
                     <div className='RO-conversationRightFileHead'>
                        <h5>Shared Images</h5>
                        <p>view all</p>
                    </div>

                    <div className='RO-conversationRightImagesPart'>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                        <img src={image6} alt="" />


                    </div>
                </div>



                

            </div>
        </div>
    )
}

export default Conversation