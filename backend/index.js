import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.js';
import postRoute from './routes/post.js';

import './models/User.js';



dotenv.config();

const app = express();


app.use(express.json());

app.use(cors(*));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)

app.use('/api/user',userRoute);
app.use('/api/post',postRoute);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
