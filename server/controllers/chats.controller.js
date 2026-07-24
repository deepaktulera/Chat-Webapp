import Chat from "../models/chatModel.js";

export async function showChats(req, res) {
  try {
    const { userId } = req.body;

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    // Find existing one-to-one chat
    let chat = await Chat.find({
      isGroupChat: false,
      users: {
        $all: [req.user.id, userId],
      },
    })
      .populate("users", "-password")
      .populate("latestMessage");

    // Populate sender inside latestMessage
    chat = await Chat.populate(chat, {
      path: "latestMessage.sender",
      select: "name email picture",
    });

    // If chat exists, return it
    if (chat.length > 0) {
      return res.status(200).json(chat[0]);
    }

    // Create new chat
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user.id, userId],
    };

    const createdChat = await Chat.create(chatData);

    const fullChat = await Chat.findById(createdChat._id).populate(
      "users",
      "-password"
    );

    return res.status(201).json(fullChat);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}