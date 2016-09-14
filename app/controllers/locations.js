var Location = require('../models/locations')

module.exports = {

    all: function(req, res, next) {
        Location.find({}).exec(function(err, locations) {
            if (err) return next(err);
            res.json({
                success: true,
                locations: locations
            });
        });
    }


}
