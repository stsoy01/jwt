const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const jwt = require('jsonwebtoken')

app.use(express.json())

app.use(cors({
    origin: 'http//:localhost:1000',
    optionsSuccessStatus: 200,
    methods: 'GET,PUT,POST'
}))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
    const accessToken = jwt.sign(req.body, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
    res.json({accessToken: accessToken})
})


app.listen(2000, () => {
    console.log('server is working')
})
