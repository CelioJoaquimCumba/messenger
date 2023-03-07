import './App.css';
import Chat from './components/Chat';
import Chats from './components/Chats';
import ConversationProvider from './providers/ConversationProvider';
import { Route, Routes } from 'react-router-dom'
import Router from './routers/Router';


function App() {
  return (
    <ConversationProvider>
      <Router/>
    </ConversationProvider>
  );
}

export default App;
