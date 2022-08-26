const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    user: {
        type: String, 
        required: true
    }
})

module.exports.MessageSchema = MessageSchema
module.exports = mongoose.model('Messages', MessageSchema)