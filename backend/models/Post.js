const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({    
    title: {
        type: String,
        required: true,
        trim: true // Optional: Removes whitespace
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        default: [] 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true ,
    date: {
        type: Date,
        default: Date.now
    }
}});

module.exports = mongoose.model('Post', postSchema);
