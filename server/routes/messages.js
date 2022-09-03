const express = require("express");
const User = require("../models/User");
const Conversation = require("../models/Conversation");
const router = express.Router();

router.get("/getConvo", async (req, res) => {
  try {
    const { recipient, userId } = req.query;

    const user = await User.findById(userId);

    let convoFound = false;

    user.conversations.forEach((convo) => {
      if (convo.recipient == recipient) {
        convoFound = convo;
      }
    });

    res.send(convoFound);
  } catch {
    console.log("error");
    res.status(404).send(err);
  }
});

router.post("/sendMessage", async (req, res) => {
  try {
    const { recipientName, userId, message } = req.body;

    const sender = await User.findById(userId);
    const recipient = await User.findOne({ name: recipientName });
    let convo = {};

    for (let i = 0; i < sender.conversations.length; i++) {
      if (sender.conversations[i].recipient == recipient.name) {
        sender.conversations[i].messages.push(message);
        convo = sender.conversations[i];
      }
    }

    for (let i = 0; i < recipient.conversations.length; i++) {
      if (recipient.conversations[i].recipient == sender.name) {
        recipient.conversations[i].messages.push(message);
      }
    }

    await sender.save();
    await recipient.save();

    res.send({ convo: convo, sender: sender });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});


router.post("/createConvo", async (req, res) => {
  try {
    const { recipientName, userId } = req.body;

    const recipient = await User.findOne({ name: recipientName });
    const sender = await User.findById(userId);

    recipient.conversations.push({ recipient: sender.name, messages: [] });
    sender.conversations.push({ recipient: recipient.name, messages: [] });

    await recipient.save();
    await sender.save();
  } catch {
    console.log("error");
    res.status(404).send(err);
  }
});

router.get("/previousConvo", async (req, res) => {
  try {
    const { user1, user2 } = req.query;

    const convo1 = await Conversation.findOne({ users: [user1, user2] });
    const convo2 = await Conversation.findOne({ users: [user2, user1] });

    if (convo1) {
      res.send(convo1);
    } else if (convo2) {
      res.send(convo2);
    } else {
      res.send(false);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
