var express = require('express'),
    Baskets = require('../controllers/baskets'),
    Locations = require('../controllers/locations'),
    Notify = require('../controllers/notify'),
    Notifications = require('../controllers/notifications'),
    Product = require('../controllers/product'),
    multer = require('multer'),
    temp = multer({ storage: multer.memoryStorage() }),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
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
router.post('/product/add', urlencodedParser, Product.add)



// ALL
router.get('/*', function(req, res, next) {
    res.send('API endpoint')
})

module.exports = router
