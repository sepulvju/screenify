import { createLogger, format, transports } from 'winston'
const { combine, timestamp, printf } = format

const myFormat = printf(info => {
  return `${info.timestamp} - ${info.level}: ${info.message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({ filename: 'log/error.log', level: 'error' }),
    new transports.File({ filename: 'log/app.log' })
  ],
  exitOnError: false
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
    handleExceptions: true
  }))
}

module.exports = logger
module.exports.stream = {
  write: (message, encoding) => {
    logger.info(message)
  }
}
