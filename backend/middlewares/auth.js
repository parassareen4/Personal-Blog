import jwt from 'jsonwebtoken';
import User from '../models/User.js';
 
export default function authentication(req,res,next){
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        res.status(401).json({message:'No token provided'})
    }
    else{
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).json({message:'Invalid token'})
            }
            else{
                req.user = decoded;
                next();
            }
        })
    }
}