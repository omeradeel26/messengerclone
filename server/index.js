//constants/dependencies
require('dotenv/config')
const express = require("express");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')

//Routes 
const userRoute = require('./routes/users')

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('example_message', function(msg){
    console.log('message: ' + msg);
  });
});
io.listen(8000);

//route connections
app.use('/users', userRoute)

//connect to DB and run express server
mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
    .then(() =>{
      app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
      });
    })
