const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('../db/connection')

connectDB()
const app = express()
const port = process.env.PORT || 2000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port)