const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch {
        res.status(404)
        res.send(err)
    }
});

router.get("/", async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    await user.save()
    res.send(user)
})



module.exports = router