'use strict'

const util = require('util')

const logger = require('../../helpers/logger')

const validatorsUtils = {
  checkErrors: checkErrors
}

function checkErrors (req, res, next, statusCode) {
  if (statusCode === undefined) statusCode = 400
  const errors = req.validationErrors()

  if (errors) {
    logger.warn('Incorrect request parameters', { path: req.originalUrl, err: errors })
    return res.status(statusCode).send('There have been validation errors: ' + util.inspect(errors))
  }

  return next()
}

// ---------------------------------------------------------------------------

module.exports = validatorsUtils
