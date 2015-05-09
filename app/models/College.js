var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CollegeSchema = new Schema({
    college: {}
});

module.exports = mongoose.model('college', CollegeSchema);
