import express from 'express';
import { showChats } from '../controllers/chats.controller.js';
import {verifyToken} from '../middlewares/verifyToken.js'

const route = express.Router();

route.post('/' ,verifyToken , showChats)

export default route