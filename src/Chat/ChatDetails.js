import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ChatDetails.css'

const ChatDetails = ({ name, last_chat }) => {
  return (
    <div className='chatDetails'>
      
             <AccountCircleIcon fontSize='large'/>
       
        <div className='chatDetails__info'>
            <h4>{name}</h4>
            <p>{last_chat}</p>
        </div>
            
        
    </div>
  )
}

export default ChatDetails
