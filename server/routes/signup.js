const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/", async (req, res) => {
    console.log('received')
    try {
        const users = await User.find()
        res.json(users)
    } catch {
        console.log('error')
        res.status(404)
        res.send(err)
    }
});

router.post("/", async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    console.log('received on backend')
    await user.save()
})

module.exports = router