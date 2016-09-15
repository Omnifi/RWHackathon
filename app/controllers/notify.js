var Basket = require('../models/baskets')
var Location = require('../models/locations')

module.exports = function(req, res, next) {

    console.log(res.body)

    if (!req.body.user_id || !req.body.beacon_id) return next(new Error('Missing beacon id or user id'))

    Basket.findOne({ user_id: req.body.user_id }).exec(function(err, basket) {

        if (err) return next(err)

        var select = basket.products.sort(function(a, b) {
            return (a.trend < b.trend)
        });

        Location.findOne({ beacon_id: req.body.beacon_id }).exec(function(err, location) {

            if (err) return next(err);

            location.product = select[0];

            location.save(function(err) {

                res.json({
                    success: true,
                    product_id: select[0].product_id
                })

            });
        });


    })



}
