const express = require('express')
const router = express.Router()
const Message = require('../models/Messages')

router.get("/", (req, res) => {
    try {
        const messages = await Message.find()
    }
});

router.post('/',(req,res)=>{
    const message = new Message({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user
    })

    try {
        const savedMessage = await message.save()
        res.json(savedMessage)
    } catch {
        res.json({message: err})
    }
})

module.exports = router