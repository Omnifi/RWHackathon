var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Basket = new Schema({
    user_id: { type: String, default: "" },
    products: [{
        name: String,
        nsfw: Boolean,
        trend: Number
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('basket', Basket);
