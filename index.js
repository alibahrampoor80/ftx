const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
app.use(cors())

app.get('/ftx', (req, res) => {
    const promise = axios.get('https://ftx.com/api/markets')
    promise.then(result => {
        // console.log(result.data)
        res.set('Content-Type', 'application/json')
        res.send(result.data)
    })


})

app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(8000)