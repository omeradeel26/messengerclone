const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/all", async (req, res) => {
  try {
    const users = await User.find({}, {_id: 0, password: 0});
    res.json(users);
  } catch {
    console.log("error");
    res.status(404);
    res.send(err);
  }
});

router.get("/signIn", async (req, res) => {
  try {
    const users = await User.find();
    let userFound = false;

    users.forEach((user) => {
      if (user.password == req.body.password && user.name == req.body.name) {
        userFound = user;
      }
    });

    if (userFound) {
      res.json(userFound);
    } else {
      res.json(false);
    }
  } catch {
    console.log("error");
    res.status(404);
    res.send(err);
  }
});

router.post("/signUp", async (req, res) => {
  try {
    const users = await User.find();
    let userFound = false;

    users.forEach((user) => {
      if (user.name == req.body.name) {
        userFound = true;
      }
    });

    if (!userFound) {
      const user = new User({
        name: req.body.name,
        password: req.body.password,
      });

      console.log("received on backend");
      await user.save();
      res.json(true);
    } else {
      res.json(false);
    }
  } catch {
    console.log("error");
    res.status(404);
    res.send(err);
  }
});

module.exports = router;
