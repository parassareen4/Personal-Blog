import express from 'express';
import User from '../models/User.js';


const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {name,email,password} = req.body;
    const user = new User({name,email,password});
    try{
        const savedUser = await user.save();
        res.json(savedUser)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


router.post('/login',async(req,res)=>{
    const {email,password} =req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({message:'User not found'})
        }
        
        else if(user.password == password){
            const token = "dadsddadad";
            res.json({token})


        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})



export default router;