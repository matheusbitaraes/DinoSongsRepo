const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined')) // morgan é pra log 
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'Healthy'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `accepted, ${req.body.email}`
    })
})

app.listen(process.env.PORT || 8081)