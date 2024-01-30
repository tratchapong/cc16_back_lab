require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const authenticate = require('./middlewares/authenticate')

const app = express()

app.use(cors())
app.use(express.json())

// service api
app.use('/auth', authRoute)



app.use( notFound )
app.use( errorMiddleware)

let port = process.env.PORT
app.listen(port, ()=>console.log("Server on",port ))