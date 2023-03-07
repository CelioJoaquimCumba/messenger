import React, { useState } from 'react';
import Conversation from '../models/Conversation'


function populateConversation() {
    let contacts = ["Steve Jobs", "Bill Gates", "Elon Musk", "George Washington", "Samora Machel"];
    let conversations = contacts.map(contact => {
        let dummyConversation = new Conversation("Celio Cumba", contact)
        for(let i = 0; i< 50; i++){
            let user1_sent
            if(Math.random() < 0.5){
                user1_sent = true;
            } else {
                user1_sent = false
            }
            let text
            if (Math.random() < 0.3) {
              text =
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quas ea temporibus, qui sequi perferendis veritatis quaerat odio sit numquam, inventore, quasi eveniet hic. Doloremque quam eveniet eligendi saepe odit!";
            } else if (Math.random() < 0.7 ) {
              text =
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ";
            } else {
                text =
                  "Lorem ipsum dolor sit.";
            }
            dummyConversation.addMessage(
              text,
              user1_sent
            );
        }
        return dummyConversation
    })
    return conversations
}



populateConversation()

const conversationList = populateConversation();

const ConversationContext = React.createContext()

function ConversationProvider({children}) {

    const [conversations, setConversations] = useState(conversationList)

    return ( 
        <ConversationContext.Provider value={{conversations}}>
            {children}
        </ConversationContext.Provider>
     );
}

export const useConversationContext = () => React.useContext(ConversationContext)

export default ConversationProvider;