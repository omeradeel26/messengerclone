const mongoose = require('mongoose')
const {MessageSchema} = require('./Messages')

const schema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    messages: {
        type: [MessageSchema],
        required: false
    }
})

module.exports = mongoose.model('User', schema)