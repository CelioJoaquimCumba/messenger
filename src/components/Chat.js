import { useConversationContext } from "../providers/ConversationProvider";
import menuDotsVertical from '../assets/menu-dots-vertical.svg'
import videoCamera from '../assets/video-camera.svg'
import phoneCall from '../assets/phone-call.svg'
import profile from "../assets/user.svg";
import arrow from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import MessageBubble from "./MessageBubble";
import Conversation from "../models/Conversation";
import MessageInput from "./MessageInput";
import { useParams } from "react-router-dom";

function Chat(props) {
  const {id} = useParams()
    let {conversations} = useConversationContext()
    let conversation = conversations.filter(convo => convo.getId() === id )[0]
    if(!conversation) {
        conversation = new Conversation("Celio Cumba", "Elon Musk");
        conversation.addMessage("Hey musk", true);
        conversation.addMessage("Hello Celio", false);
    }
    return (
      <div className="chat">
        <nav className="nav">
          <Link to="/" className="chat-back-arrow">
            <img
              className="fi fi-rr-arrow-small-left"
              src={arrow}
              alt="back arrow"
              width={30}
            />
          </Link>
          <div className="sender-information">
          <div className="chat-profile-pic">
              <img
                className="fi fi-rr-user"
                src={profile}
                alt="profile"
                width={20}
              />
            </div>
            <div className="chat-receiver">{conversation.getUser2()}</div>
            <div className="status">Online</div>
          </div>
          <ul className="nav-items">
            <li className="nav-item nav-item2">
              <img
                className="fi fi-rr-video-camera-alt"
                src={videoCamera}
                width={20}
                alt="video call option"
              />
            </li>
            <li className="nav-item nav-item3">
              <img
                className="fi fi-tr-phone call"
                src={phoneCall}
                width={20}
                alt="phone call option"
              />
            </li>
            <li className="nav-item nav-item1">
              <img
                className="fi fi-rr-menu-dots-vertical-dots-vertical"
                src={menuDotsVertical}
                width={20}
                alt="options"
              />
            </li>
          </ul>
        </nav>
        <main className="main">
          {conversation.getMessages().map((message) => (
            <MessageBubble key={message.getId()} message={message} viewer={conversation.getUser1()} sender={message.getSender()} />
          ))}
        </main>
        <footer className="footer">
          <MessageInput />
        </footer>
      </div>
    );
}

export default Chat;