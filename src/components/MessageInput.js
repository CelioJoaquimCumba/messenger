import React from "react";
import send from '../assets/send.svg'

function MessageInput() {
    const messageRef = React.useRef("")
    return ( 
        <div className="message-input">
            <input type="text" placeholder="Message" ref={messageRef} className="message-field" />
            <input type="image" src={send} width={10} alt="send button" onClick={()=>console.log("clicked")} className="send-message-button" />
        </div>
     );
}

export default MessageInput;