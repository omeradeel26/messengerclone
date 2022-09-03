const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/search", async (req, res) => {
  try {
    const {userName} = req.query;
    const user = await User.findOne({name: userName}, { password: 0 });    
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/signIn", async (req, res) => {
  try {
    const {password, name} = req.query
    const user = await User.findOne({name: name, password: password});

    if (user) {
      res.status(200).send(user);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(err);
  }
});

router.post("/signUp", async (req, res) => {
  try {
    const { name, password} = req.body
    const findUser = await User.findOne({name: name});

    if (!findUser) {
      const user = new User({
        name: name,
        password: password,
        conversations: [],
      });
      await user.save();

      res.status(200).send(user);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(err);
  }
});

module.exports = router;
