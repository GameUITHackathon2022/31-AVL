const mongoose = require('mongoose')

const { Schema } = mongoose

const Task = new Schema({
    name: {
        type: String,
        required: true,
    }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Task', Task)