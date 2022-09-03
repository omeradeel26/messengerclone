const mongoose = require('mongoose')

const ConversationSchema = mongoose.Schema({
    recipient: {
        type: String, 
        required: true
    },
    messages: {
        type: [Object], 
        required: true
    },
})

module.exports.ConversationSchema = ConversationSchema