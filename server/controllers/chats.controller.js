import { chats } from "../data.js";

export async function showChats(req , res){
    try{
        res.status(200).json(chats)
    }
    catch (err){
        res.status(500).json({
        message: err.message,
        });
    }
}

