const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const users = require('../data/user.json')

app.use(express.json())

app.use(cors({
    origin: 'http//:localhost:1000',
    optionsSuccessStatus: 200,
    methods: 'GET,PUT,POST'
}))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
    const result = users.some((user) => user.email === req.body.email && user.password === req.body.password)
    if (!result) {
        res.json({status: 'No such email or password'})

    }


    const accessToken = jwt.sign(req.body, process.env.ACCESS_TOKEN, {expiresIn: '1h'});
    res.json({accessToken: accessToken})
})

app.get('/tokenAuth', (req, res, next) => {
    const authHeader = req.headers?.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    const result = (function () {
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
            return {success: true, data: decoded}
        } catch (err) {
            return {success: false, error: 'error'}
        }
    })()

    if (!result.success) return res.status(403).json({error: result.error});

    res.json({status: 'success'})
})


app.listen(2000, () => {
    console.log('server is working on PORT 2000')
})
