var College = require('../models/College.js');

function csvToMongo(file, csvType) {
	var modelPath = '../models/' + csvType + '.js',
		modelToUse = require(modelPath),
		modelKey = csvType.toLowerCase();

	var modelInstance = new modelToUse({
		//modelKey: file
	});
	modelInstance[modelKey] = file;

	modelInstance.save(function (err, saved) {
		if (err)
			return err;
		console.log(csvType + ' CSV is in the DB');
	})
}

module.exports = csvToMongo;