import Message from "../models/Message"

function MessageBubble(props) {
    let message
    if(props.message) {
        message = props.message
    }else{
        message = new Message("Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto reprehenderit reiciendis! Harum laborum fuga exercitationem neque laboriosam aperiam et modi. Dolorem illo fuga ab, mollitia odit hic debitis!")
    }
    const {sender, viewer} = props
    return ( 
        <div className={`message-bubble message-${sender === viewer ? "sent" : "received"}`}>
            <p className="message">{message.getMessage()}</p>
            <p className="timestamp">{message.getTime().toString()}</p>
        </div>
     );
}

export default MessageBubble;