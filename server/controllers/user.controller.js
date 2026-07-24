import User from "../models/userModel.js";

export async function searchUsers(req, res) {
  try {
    const keyword = req.query.search
      ? {
          username: {
            $regex: req.query.search,
            $options: "i",
          },
        }
      : {};

    const users = await User.find({
      ...keyword,
      _id: { $ne: req.user.id },
    }).select("-password");

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}