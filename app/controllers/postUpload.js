var parseCsv = require('./parseCsv.js');

module.exports = function (req, res) {
	var csvType = req.body.csvType;
	
	parseCsv(req.files.csvFile.path, csvType);
	res.redirect('/');
};