const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello desde servidor 3')
})
 
app.listen(3003)