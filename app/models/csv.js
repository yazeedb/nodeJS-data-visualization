var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var csvSchema = new Schema({
	data: {}
});

module.exports = mongoose.model('csv', csvSchema);