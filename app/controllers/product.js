var Basket = require('../models/baskets')

module.exports = {

    add: function(req, res, next) {

        if (!req.body.user_id || !req.body.name || !req.body.nsfw || !req.body.trend || !req.body.product_id) return next(new Error('Missing user id or product name, trend, nsfw, product_id'))

        console.log(req.body)

        Basket.findOne({ user_id: req.body.user_id }).exec(function(err, basket) {
            if (err) return next(err)
            if (basket) {

                basket.products.push({
                    name: req.body.name,
                    nsfw: req.body.nsfw,
                    trend: req.body.trend,
                    product_id: req.body.product_id
                });

                basket.save(function(err) {
                    res.json({ success: true });
                });

            } else {
                const basket = new Basket({
                    user_id: req.body.user_id
                });

                basket.products.push({
                    name: req.body.name,
                    nsfw: req.body.nsfw,
                    trend: req.body.trend,
                    product_id: req.body.product_id
                });

                basket.save(function(err, basket) {
                    res.json({ success: true });
                })
            }
        })


    }

}
