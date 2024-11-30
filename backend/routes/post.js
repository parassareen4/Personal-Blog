import express from 'express';
import Post from '../models/Post.js';
import authentication from '../middlewares/auth.js';

const router = express.Router();

router.get('all',authentication,async(req,res)=>{
    const posts = await Post.find({author:req.user._id});
    res.json(posts)
})

router.post('creste',authentication,async(req,res)=>{
    const {title,content} = req.body;
    const post = new Post ({title,content,author:req.user._id});
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

