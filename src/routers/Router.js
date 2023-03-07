import { Route, Routes } from "react-router-dom";
import Chat from "../components/Chat";
import Chats from "../components/Chats";

function Router() {
    return ( 
        <>
        
            <Routes>
                <Route path="/chat/:id" element={<Chat/>}/>
                <Route path="/" element={<Chats/>}/>
            </Routes>
        </>
     );
}

export default Router;