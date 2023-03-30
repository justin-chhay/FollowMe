// app.js

const express = require('express');
const connectDB = require('./config/db');
const jwt = require("jsonwebtoken")
const cp = require("cookie-parser")

const app = express();

// Connect Database
connectDB();

app.use(cp())
app.get('/', (req, res) => res.send('Hello world!!!!'));

//set the cookie
app.get("/set/cookie", (req, res) => {
    //data to send
    const payload = {
        name: "Justin Chhay",
        age: "36"
    }

    //create a token
    const token = jwt.sign(payload, "secretkey")

    res.cookie("token", token, {
        httpOnly: true
    }).send("cookie shipped")
})


//verify cookie has token and data in it
app.get("/get/cookie", (req, res) => {
    const token = req.cookies.token //called the cookie 'token' 
    const patload = jwt.verify(token, "secretkey")
    res.json(req.cookies)
})



const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));