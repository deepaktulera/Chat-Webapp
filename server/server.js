import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDatabase from './config/database.js'
import chatRoute from './routes/chats.routes.js'

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173'
}));

connectDatabase()

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Chat-App API is running",
  });
});

app.use('/chats' , chatRoute)

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));