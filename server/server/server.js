const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const chats = require('./data');

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/api/chat', (req, res) => {
    res.json(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(item => item._id === req.params.id);
    res.json(singleChat);
});

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => console.log("Server Started"));