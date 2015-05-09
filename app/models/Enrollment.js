var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EnrollmentSchema = new Schema({
    enrollment: {}
});

module.exports = mongoose.model('enrollment', EnrollmentSchema);
