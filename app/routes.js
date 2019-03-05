const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/', function(req, res, next) {
  if(!req.query.legislation) {
    res.locals.data.legislation = []
  }
  next()
})

module.exports = router
