import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { showChats } from "../services/chatService";
import Header from "../components/Header";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const response = await showChats();
    setChats(response.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="h-screen bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white p-3">
      <div className="grid grid-cols-[350px_1fr] gap-2 h-full rounded-2xl overflow-hidden">

        {/* Sidebar */}
        <section className="bg-white text-zinc-500 dark:bg-zinc-950 shadow-2xl dark:text-white border-zinc-800 flex flex-col">
          <Header />

          {/* Search */}
          <div className="p-3">
            <div className="flex items-center bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white rounded-lg px-3 py-2">
              <Search className="w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search chats..."
                className="bg-transparent outline-none ml-2 w-full text-zinc-500 dark:bg-zinc-950 dark:text-white placeholder:text-zinc-500"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto px-2 pb-2">
            {chats.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white transition-all duration-200"
              >
                {/* Avatar */}
                <img
                  src={
                    item.avatar ||
                    "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(item.chatName)
                  }
                  alt={item.chatName}
                  className="w-12 h-12 rounded-full object-cover"
                />

                {/* Chat Details */}
                <div className="flex-1 overflow-hidden">
                  <h2 className="bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white font-medium truncate">
                    {item.chatName}
                  </h2>

                  <p className="text-sm bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white truncate">
                    Start chatting...
                  </p>
                </div>

                {/* Time */}
                <span className="text-xs bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white">
                  10:45 PM
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Chat Area */}
        <section className="bg-white text-zinc-500 dark:bg-zinc-950 dark:text-white flex items-center justify-center">
          <div className="text-center text-zinc-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              alt="Chat"
              className="w-24 mx-auto opacity-40"
            />

            <h2 className="text-2xl dark:text-white mt-5 font-semibold">
              Welcome to ChatApp
            </h2>

            <p className="mt-2">
              Select a conversation to start chatting.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ChatPage;