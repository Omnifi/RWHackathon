var Basket = require('../models/baskets')

module.exports = function(req, res, next) {

    if (!req.body.user_id || !req.body.beacon_id) return next(new Error('Missing beacon id or user id'))

    //beacon id tells the player id

    Basket.findOne({user_id: req.body.user_id}).exec(function(err, basket) {
        if (err) return next(err)
        res.json({
            success: true,
            basket: basket
        })
    })

}
