var Basket = require('../models/baskets')

module.exports = {

    all: function(req, res, next) {
        Basket.find({}).exec(function(err, baskets) {
            if(err) return next(err)
            res.json({
                success: true,
                baskets: baskets
            })
        })
    },

    one: function(req, res, next) {
        // if (!req.params.id) return next()
        // //Brand.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true, new: true }, function(err, brand) {
        // //    if (err) return next(err)
        //     res.render('index', { title: 'Edit', action: 'edit - ' + req.params.id })
        // //})
        res.end()
    },

    add: function(req, res, next) {
        // if (!req.params.id) return next()
        // //Brand.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true, new: true }, function(err, brand) {
        // //    if (err) return next(err)
        //     res.render('index', { title: 'Edit', action: 'edit - ' + req.params.id })
        // //})
        res.end()
    },

    update: function(req, res, next) {
        // if (!req.params.id) return next()
        // //Brand.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true, new: true }, function(err, brand) {
        // //    if (err) return next(err)
        //     res.render('index', { title: 'Edit', action: 'edit - ' + req.params.id })
        // //})
        res.end()
    }

}
