var express = require('express'),
    router = express.Router()

// ALL

// GET /
router.get('/*', function(req, res, next) {
    res.send('API endpoint')
})

module.exports = router
