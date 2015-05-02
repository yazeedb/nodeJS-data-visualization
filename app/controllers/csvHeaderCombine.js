module.exports = function (csvFile) {
	//array that holds all header:data objects
	var headersPlusData = [], 
		x, y;

	//loop through each school array
	//set x iterator to 1 so it skips CSV headers
	for (x = 1; x < csvFile.length; x++) { 
		//new object for every school's header:data pairs
		var headerInfoPair = {}; 

		//loop through each piece of data for a school
		for (y = 0; y < csvFile[0].length; y++) { 
			//key = header
			//value = data
			headerInfoPair[csvFile[0][y]] = csvFile[x][y]; 
		}

		//add that obj to the array once it's loaded up
		//1 object represents 1 school's headers:data
		headersPlusData.push(headerInfoPair) 
	}
	console.log(headersPlusData);
	return headersPlusData;
};