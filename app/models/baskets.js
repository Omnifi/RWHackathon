var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Basket = new Schema({
    user_id: { type: String, default: "" },
    products: [{
        name: String,
        nsfw: Boolean,
        trend: Number,
        product_id: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('basket', Basket);
