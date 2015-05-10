var fs = require('fs'),
	parse = require('csv-parse'),
	//csvToMongo = require('./csvToMongo');
	csvHeaderCombine = require('./csvHeaderCombine');

function parseCsv(file, csvType) {
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
		//csvToMongo(data, csvType);
		csvHeaderCombine(data, csvType);
	});
}

module.exports = parseCsv;