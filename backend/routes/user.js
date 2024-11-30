import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';


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
        else{
            const isPasswordCorrect = user.password === password;
            if(!isPasswordCorrect){
                res.status(401).json({message:'Incorrect password'})
            }
            else{
                const token = jwt.sign({user},process.env.JWT_SECRET);
                console.log(user)
                res.json({token})
            }
        }
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
   
})



export default router;