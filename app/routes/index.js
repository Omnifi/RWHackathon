var express = require('express'),
    router = express.Router()

// GET /
router.get('/', function(req, res, next){
	res.render('index', { title: 'Home' })
})

module.exports = router
