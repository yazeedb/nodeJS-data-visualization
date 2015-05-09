var College = require('../models/College.js');

function csvToMongo(file) {
	var college = new College({
		data: file
	});

	college.save(function (err, saved) {
		if (err)
			return err;
		console.log('CSV is in the DB');
	});
}

module.exports = csvToMongo;