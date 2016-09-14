var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Model = new Schema({
    name: { type: String, default: "Name" },
    truthy: { type: Boolean, default: true }
},{
    timestamps: true
});

module.exports = mongoose.model('model', Model);
