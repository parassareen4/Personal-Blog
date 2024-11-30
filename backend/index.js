import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.js';


import './models/User.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB_URI)

app.use('/api/user',userRoute);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})