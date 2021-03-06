'use strict'

const adminMiddleware = require('./admin')
const oauthMiddleware = require('./oauth')
const paginationMiddleware = require('./pagination')
const validatorsMiddleware = require('./validators')
const searchMiddleware = require('./search')
const sortMiddleware = require('./sort')
const secureMiddleware = require('./secure')

const middlewares = {
  admin: adminMiddleware,
  oauth: oauthMiddleware,
  pagination: paginationMiddleware,
  search: searchMiddleware,
  secure: secureMiddleware,
  sort: sortMiddleware,
  validators: validatorsMiddleware
}

// ---------------------------------------------------------------------------

module.exports = middlewares
