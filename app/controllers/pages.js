var Model = require('../models/model')

module.exports = {

    show: function(req, res, next) {
        //Model.find().exec(function(err, model) {
         //   if (err || !model) return next(err || new Error('No model found'))
            res.render('index', { title: 'Show', action: 'show' })
        //})
    },

    edit: function(req, res, next) {
        if (!req.params.id) return next()
        //Brand.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true, new: true }, function(err, brand) {
        //    if (err) return next(err)
            res.render('index', { title: 'Edit', action: 'edit - ' + req.params.id })
        //})
    }

}
