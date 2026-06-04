import React from 'react';
import { useEffect } from 'react';

const ChatPage = () => {

    const fetchChats = async () =>{
        const responce = await fetch('http://localhost:3100/api/chat')
        const data = await responce.json()
        console.log(data);
    }

    useEffect(() =>{
        fetchChats();
    } , [])


  return (
    <div>
      chats
    </div>
  );
}

export default ChatPage;
