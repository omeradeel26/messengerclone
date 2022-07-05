//constants/dependencies
require('dotenv/config')
const express = require("express");
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')

//Routes 
const signupRoute = require('./routes/signup')

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//route connections
app.use('/signup', signupRoute)

//connect to DB and run express server
mongoose
    .connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
    .then(() =>{
      app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
      });
    })
