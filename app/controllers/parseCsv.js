var fs = require('fs'),
	parse = require('csv-parse'),
	csvToMongo = require('./csvToMongo');

function parseCsv(file) {
	var fileStream = fs.createReadStream(file);
	var data;

	var parser = parse(function (err, output) {
		if (err)
			return err;
		data = output;
	});

	fileStream.pipe(parser);

	parser.on('end', function () {
		console.log('Parsed CSV');
		csvToMongo(data);
	});
}

module.exports = parseCsv;