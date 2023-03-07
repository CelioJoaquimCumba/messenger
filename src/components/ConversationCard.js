import { Link } from "react-router-dom";
import profile from "../assets/user.svg";
function ConversationCard(props) {
    let conversation
    conversation = {
      id: props.conversation.getId(),
      receiver: props.conversation.getUser2(),
      lastMessage: props.conversation.getLastMessage().getMessage(),
      timestamp: props.conversation.getLastMessage().getTime(),
    };
    if(conversation.lastMessage.length > 70) conversation.lastMessage = conversation.lastMessage.substr(0,70) + "..."
    return (
      <Link className="link" key={conversation.id} to={"/chat/" + conversation.id}>
        <div className={"chat-card "}>
          <div className="image-container">
            <img src={profile} alt="profile" width={15} />
          </div>
          <h1 className="chat-card-receiver">{conversation.receiver}</h1>
          <p className="chat-card-last-message">
            {conversation.lastMessage}
          </p>
          <p className="chat-card-timestamp">
            {conversation.timestamp}
          </p>
        </div>
      </Link>
    );
}

export default ConversationCard;