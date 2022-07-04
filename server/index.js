const express = require("express");
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/home", (req, res) => {
    res.json({ name: 'Omer Adeel', message: 'Omer missed your video chat.' });
});

app.post("/login", (req, res) => {
    const {email, password} = req.body 
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});