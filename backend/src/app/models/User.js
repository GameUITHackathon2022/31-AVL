const mongoose = require('mongoose')

const { Schema } = mongoose

const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
    },
    isAdmin: {
        type: Boolean,
        // required: true
    },
    scores: {
        type: Number
    },
    tasks: {
        type: []
    },
    
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', User)