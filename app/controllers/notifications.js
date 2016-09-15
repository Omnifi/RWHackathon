var Basket = require('../models/baskets')
var Location = require('../models/locations')

module.exports = function(req, res, next) {

    if (!req.params.player_id) return next(new Error('Missing player id'))

    Location.findOne({}).exec(function(err, location) {

        if (err) return next(err);

        res.json({ success: true, location: location })


    });

}
