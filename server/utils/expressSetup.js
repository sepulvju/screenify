import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import config from '../config.json'

let app = express()

// Express app setup
app.use(cors({
  exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json({
  limit: config.bodyLimit
}))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())
