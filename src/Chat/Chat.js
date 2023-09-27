import React from 'react'
import './chat.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import ChatDetails from './ChatDetails';

const chat = () => {
  return (
    <div className='chat'>
      <div className='chatHeader'>
        <div className='chatHeader__left'>
        <AccountCircleIcon fontSize='large' img="harry.jpg"/>
        </div>
        <div className='chatHeader__right'>
        <ChatIcon fontSize='medium'/>
        <MoreVertIcon fontSize='medium'/>
        </div>
      </div>

      <div className='chatSearch'>
        <div className='chatSearch__input'>
          <SearchIcon/>
          <input placeholder='Search or start new chat'></input>
        </div>
        <div className='chatSearch__filter'>
           <LayersIcon/>
        </div>
      </div>
      <div className='Chats'>
        <ChatDetails name={"Ron"} last_chat={"Anyway, any plans for the weekend? Hogsmeade?"}/>
        <ChatDetails name={"Dumbledore"} last_chat={"I'll try, Professor. Thanks for the advice."}/>
        <ChatDetails name={"Hermione"} last_chat={"I'll probably finish some extra reading and work on my Arithmancy essay. You know me."}/>
      </div>
    </div>
  )
}

export default chat
