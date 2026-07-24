import express from "express";
import { searchUsers } from "../controllers/user.controller.js";
import {verifyToken} from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, searchUsers);

export default router;