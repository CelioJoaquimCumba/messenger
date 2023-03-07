import { Link } from "react-router-dom";
import { useConversationContext } from "../providers/ConversationProvider";
import camera from "../assets/camera.svg";
import search from "../assets/search.svg";
import menuDotsVertical from "../assets/menu-dots-vertical.svg";
import { useState } from "react";
import ConversationCard from "./ConversationCard";

function Chats() {
  const { conversations } = useConversationContext();
  const [selected, setSelected] = useState({
    chats: true,
    status: false,
    calls: false,
  });
  function handleTab(tab) {
    let object = {};
    for (var key in selected) {
      object[key] = key === tab;
    }
    setSelected(object);
  }

  //JSX ELEMENTS
  const conversationsList = conversations.map((conversation, index) => (
    <ConversationCard key={index} conversation={conversation}/>
  ));
  
  const MainChild = () => {
    if (selected.chats) {
      return <>{conversations ? conversationsList : <p>No conversations</p>}</>;
    } else if (selected.status) {
      return <h1>Status-TODO</h1>;
    } else if (selected.calls) {
      return <h1>Calls-TODO</h1>;
    } else {
      return <h1>None of that</h1>;
    }
  };
  return (
    <div className="chats">
      <header className="header">
        <h1 className="header-title">Messenger</h1>
        <nav className="nav-items">
          <ul className="nav-items">
            <li className="nav-item nav-item1">
              <img
                src={camera}
                alt="alt"
                width={15}
                className="fi fi-rr-camera"
              />
            </li>
            <li className="nav-item nav-item2">
              <img
                src={search}
                alt="alt"
                width={15}
                className="fi fi-rr-search"
              />
            </li>
            <li className="nav-item nav-item3">
              <img
                src={menuDotsVertical}
                alt="alt"
                width={15}
                className="fi fi-rr-menu-dots-vertical-dots-vertical"
              />
            </li>
          </ul>
        </nav>
        <div className="tabs">
          <button
            className={`tab tab-chats-btn  ${
              selected.chats ? "selected-tab" : ""
            }`}
            onClick={() => handleTab("chats")}
          >
            Chats
          </button>
          <button
            className={`tab tab-status-btn   ${
              selected.status ? "selected-tab" : ""
            }`}
            onClick={() => handleTab("status")}
          >
            Status
          </button>
          <button
            className={`tab tab-calls-btn ${
              selected.calls ? "selected-tab" : ""
            }`}
            onClick={() => handleTab("calls")}
          >
            Calls
          </button>
        </div>
      </header>
      <main className="main">
        <MainChild />
      </main>
    </div>
  );
}

export default Chats;
