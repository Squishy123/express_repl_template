const express = require('express')
const path = require('path')


const app = express()
const port = 8080

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

//@TODO
//Add routes here:

(async() => {
    app.listen(port, () => {
        console.log('Server started at http://localhost:' + port)
    })
})()
