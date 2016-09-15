var Basket = require('../models/baskets')

module.exports = {

    add: function(req, res, next) {

        if (!req.body.user_id || !req.body.name || !req.body.nsfw || !req.body.trend) return next(new Error('Missing user id or product name, trend, nsfw'))

        const basket = new Basket({
            user_id: req.body.user_id
        });

        basket.products.push({
            name: req.body.name,
            nsfw: req.body.nsfw,
            trend: req.body.trend
        });

        basket.save(function(err, basket) {
            //console.log(err, basket);
            res.send('ok');
        })

    }

}
