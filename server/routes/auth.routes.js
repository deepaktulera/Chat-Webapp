import express from "express";
import upload from "../middlewares/upload.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Register User (Upload Profile Picture)
router.post(
  "/register",
  upload.single("picture"),
  registerUser
);

// Login User
router.post("/login", loginUser);

// Logout User
router.post("/logout", logoutUser);

export default router;