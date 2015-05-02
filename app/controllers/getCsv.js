var CSV = require('../models/csv.js'),
	csvHeaderCombine = require('../controllers/csvHeaderCombine.js');

module.exports = function (req, res) {

	CSV.findOne({}, { '_id': 0 }, function (err, csvFile) {
		if (err)
			return err;

		if (csvFile) {
			var data = csvHeaderCombine(csvFile.data);
		}

		return res.render('csv.jade', { title: 'CSV File', schoolLinks: data });
	});
}