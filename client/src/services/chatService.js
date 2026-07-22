import api from "./axios";

export async function showChats(){
    return await api.get("/chats")
}