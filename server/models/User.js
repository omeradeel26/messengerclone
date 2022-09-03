const mongoose = require('mongoose')
const { ConversationSchema } = require('./Conversation')

const schema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    conversations: {
        type: [ConversationSchema],
        required: true
    }
})

module.exports = mongoose.model('User', schema)