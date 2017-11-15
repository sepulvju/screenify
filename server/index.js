import http from 'http'
import express from 'express'
import config from './config.json'
import logger from './utils/log.js'
import './utils/expressSetup'

import api from './api'

let app = express()
app.server = http.createServer(app)
app.use(require('morgan')('combined', { 'stream': logger.stream }))
app.use('/api', api({ config }))

// Start
app.server.listen(process.env.PORT || config.port, () => {
  logger.info(`Started on port ${app.server.address().port}`)
})

export default app
