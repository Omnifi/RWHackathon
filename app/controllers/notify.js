var Basket = require('../models/baskets')

module.exports = function(req, res, next) {

    if (!req.body.user_id || !req.body.beacon_id) return next(new Error('Missing beacon id or user id'))

    // Basket.find({}).exec(function(err, baskets) {
    //     if (err) return next(err)
    //     res.json({
    //         success: true,
    //         baskets: baskets
    //     })
    // })

    res.send('NOTIFY: ' + req.body.user_id + ' ' + req.body.beacon_id)

}
