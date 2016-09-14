var express = require('express'),
    pages = require('../controllers/pages'),
    router = express.Router()

// GET /
router.get('/', function(req, res, next){
	res.render('index', { title: 'Home' })
})

// GET /pages
router.get('/pages', pages.show)

// GET /pages/name
router.get('/pages/:id/', pages.edit)

module.exports = router
