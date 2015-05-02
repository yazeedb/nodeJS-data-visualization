var parseCsv = require('./parseCsv.js');

module.exports = function (req, res) {
	parseCsv(req.files.csvFile.path);
	res.redirect('/');
};