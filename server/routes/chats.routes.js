import express from 'express';
import { showChats } from '../controllers/chats.controller.js';

const route = express.Router();

route.get('/' , showChats)

export default route