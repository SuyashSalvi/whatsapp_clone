import React from 'react'
import './sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import { useEffect, useState } from 'react';
import axios from '../axios.js';

const Sidebar = ({ messages, name }) => {

  const [input, setinput] = useState("")

  const sendMessage = async (e) =>{
    e.preventDefault();

    const currentDate = new Date();

    // Format date (dd/mm/yyyy)
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    // Format time (hh:mm)
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Combine date and time
    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    await axios.post("/messages/new",{
      "message": input,
      "name": "Harry",
      "timestamp": formattedDateTime,
      "recevied": false
  })
  setinput("");
  }

  return (
    <div className='sidebar'>

      <div className='sidebar__header'>
        <div className='sidebar__left'>
          <AccountCircleIcon fontSize='large'/>
          <p>Ron</p>
        </div>

       

        <div className='sidebar__right'>
          <CallIcon fontSize='small'/>
          <VideocamRoundedIcon fontSize='medium'/>
        </div>

      </div>

      <div className='sidebar__body'>
        {messages.map(({name, message, timestamp, recevied})=>(
              <p className= {`chat__message ${recevied && "chat__recevier"}`}>
              <span className='chat__name'>{name}</span> <br/>
              {message}<br/>
              <span className='chat__timestamp'>{timestamp}</span>
            </p>
        ))}

      </div>

      <div className='sidebar__footer'>
        <div className='sidebar__footer__emoji'>
          <MoodRoundedIcon/>
        </div>

        
        <div className='sidebar__footer__searchbar'>
        <form> 
          <input placeholder='Type a message' value={input} onChange={(e)=>setinput(e.target.value)}></input>
          <button onClick={sendMessage} type="submit"></button>
        </form>
        </div>
 
        <div className='sidebar__footer__mic'>
          <KeyboardVoiceRoundedIcon/>
        </div>
      </div>  


    </div>
  )
}

export default Sidebar
