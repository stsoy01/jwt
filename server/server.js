const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

app.use(cors({
  origin: 'http//:localhost:1000',
  optionsSuccessStatus: 200,
  methods: 'GET,PUT,POST'
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
  console.log(req.body)
  res.json('ok')
  // res.json({msg: 'This is CORS-enabled for all origins!'})
})


app.listen(2000, () => {
  console.log('server is working')
})
