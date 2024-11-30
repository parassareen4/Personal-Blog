import express from 'express';
import Post from '../models/Post.js';
import authentication from '../middlewares/auth.js';

const router = express.Router();

router.get('all',authentication,async(req,res){
    const posts = await Post.find
})