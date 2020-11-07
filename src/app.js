const express = require('express')
const app = express()
const cors = require('cors')

const database = require('./models/repository')
database.connect()

const musicas = require('./routes/musicasRoutes')

app.use(cors())
app.use(express.json())
app.use('/', musicas)

module.exports = app