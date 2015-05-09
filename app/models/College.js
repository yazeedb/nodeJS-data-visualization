var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CollegeSchema = new Schema({
    data: {}
});

module.exports = mongoose.model('college', CollegeSchema);
