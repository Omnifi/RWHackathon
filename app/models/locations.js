var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Location = new Schema({
    name: { type: String, default: 'Name' },
    address: { type: String, default: 'Address' },
    geo: { type: [Number], index: '2dsphere' },
    beacon_id: { type: String, default: '000' },
    player_id: { type: String, default: '000' },
    product: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Locations', Location)
