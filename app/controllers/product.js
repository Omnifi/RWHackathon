var Basket = require('../models/baskets')

module.exports = {

    add: function(req, res, next) {

        if (!req.body.user_id || !req.body.product_id) return next(new Error('Missing product id or user id'))

        // Basket.find({}).exec(function(err, baskets) {
        //     if(err) return next(err)
        //     res.json({
        //         success: true,
        //         baskets: baskets
        //     })
        // })
        res.send('Product added: ' + req.body.user_id + ' ' + req.body.product_id)
    }

}
