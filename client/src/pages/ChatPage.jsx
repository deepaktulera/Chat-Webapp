import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ChatPage = () => {
  const [chats, setchats] = useState([]);

  const fetchChats = async () => {
    const responce = await fetch("http://localhost:3100/api/chat");
    const data = await responce.json();
    console.log(data);

    setchats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.chatName}</h1>
          </div>
        )
      })}
    </div>
  );
};

export default ChatPage;
