var College = require('../models/College.js'),
	csvHeaderCombine = require('../controllers/csvHeaderCombine.js');

module.exports = function (req, res) {

	College.findOne({}, function (err, csvFile) {
		if (err)
			return err;

		if (csvFile) {
			var data = csvHeaderCombine(csvFile.college);
		}

		return res.render('csv.jade', { title: 'CSV File', schoolLinks: data });
	});
}