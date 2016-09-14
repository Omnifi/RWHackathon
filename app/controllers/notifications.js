var Basket = require('../models/baskets')

module.exports = function(req, res, next) {

	if (!req.params.player_id) return next(new Error('Missing player id'))

    // Basket.find({}).exec(function(err, baskets) {
    //     if (err) return next(err)
    //     res.json({
    //         success: true,
    //         baskets: baskets
    //     })
    // })

    res.send('Notifications: ' + req.params.player_id)

}
