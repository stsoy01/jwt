const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(cors({
  origin: 'http//:localhost:1000',
  optionsSuccessStatus: 200,
  methods: 'GET,PUT,POST'
}))



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
  let userData;

  fs.readFile('../data/user.json', 'utf8', (err, data) => {
    console.log(data);
  })


  res.json(req.body)
})


app.listen(2000, () => {
  console.log('server is working')
})
