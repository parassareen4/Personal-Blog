import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {name,email,password} = req.body;
    const user = new User({name,email,password});
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(err){
        res.status(500).json({message:'Error creating user'})
    }
})

export default router;