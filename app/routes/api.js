var express = require('express'),
    Baskets = require('../controllers/baskets'),
    Locations = require('../controllers/locations'),
    Notify = require('../controllers/notify'),
    Notifications = require('../controllers/notifications'),
    Product = require('../controllers/product'),
    multer = require('multer'),
    temp = multer({ storage: multer.memoryStorage() }),
    router = express.Router()

// GET

// GET /baskets
router.get('/baskets', Baskets.all)

// GET /baskets
router.get('/locations', Locations.all)

// GET /notifications/:player_id
router.get('/notifications/:player_id', Notifications)



// POST

// POST /notify
router.post('/notify', temp.single('image'), Notify)

// POST /product/add
router.post('/product/add', temp.single('image'), Product.add)



// ALL
router.get('/*', function(req, res, next) {
    res.send('API endpoint')
})

module.exports = router
