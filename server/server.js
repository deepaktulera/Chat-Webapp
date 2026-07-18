import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDatabase from './config/database.js'
import chatRoutes from './routes/chats.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express();
dotenv.config();
app.use(express.json());

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

app.use('/chats' , chatRoutes)
app.use('/auth' , authRoutes)

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));