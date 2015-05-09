var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TuitionSchema = new Schema({
    tuition: {}
});

module.exports = mongoose.model('tuition', TuitionSchema);
