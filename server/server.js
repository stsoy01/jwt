const express = require('express');
const app = express()
app.post('/auth', (req, res) => {
    console.log(req.body);
    res.send('asdasdasd')
})


app.listen(2000, () => {
    console.log('server is working')
})
