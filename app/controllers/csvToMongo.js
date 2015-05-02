var CSV = require('../models/csv.js');

function csvToMongo(file) {
	var csv = new CSV();

	csv.data = file;
	csv.save(function (err, saved) {
		if (err)
			return err;
		console.log('CSV is in the DB');
	});
}

module.exports = csvToMongo;