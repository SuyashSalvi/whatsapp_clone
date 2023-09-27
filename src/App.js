import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {

  const [messages, setMessages] = useState([]) ;

  useEffect(() =>{

    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  

  }, [messages]);

  useEffect(()=>{
    const  pusher = new Pusher('51df8688c4bdfc557e31', {
      cluster: 'us3'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) =>{
      setMessages([...messages,data])
    });

    //cleanup function
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages])

  return (

    <div className="app">
    <div className='app__body'>
      <Chat />
      <Sidebar messages={messages} name={"Ron"} />
    </div>
    </div>
  );
}

export default App;
