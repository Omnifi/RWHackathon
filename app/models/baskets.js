var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Basket = new Schema({
    user_id: { type: String, default: "" },
    product_ids: [String],
    purchased_ids: [String],
    redeemed_ids: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('basket', Basket);
