//constants/dependencies
require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
  },
});

//socket handling
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("sendMessage", (data) => {
    console.log(data)
    socket.broadcast.emit("receiveMessage", data);
  });
});

//Routes
const userRoute = require("./routes/user");
const messagesRoute = require("./routes/messages");

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route connections
app.use("/user", userRoute);
app.use("/messages", messagesRoute);

//connect to DB and run express server
mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  });
