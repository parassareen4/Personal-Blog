import mongoose from "mongoose";
import User from "./User.js";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    date:{
        type:Date,
        default:Date.now
    }

})