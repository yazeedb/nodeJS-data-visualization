var getHomeCtrl = require('../controllers/getHome.js'),
	getUploadCtrl = require('../controllers/getUpload.js'),
	postUploadCtrl = require('../controllers/postUpload.js'),
	getCsvCtrl = require('../controllers/getCsv.js');

module.exports = function (app, express) {
	//router for the app
	var appRouter = express.Router();

	appRouter.get('/', getHomeCtrl); //home page

	appRouter.route('/upload') //upload CSV page
		.get(getUploadCtrl) //GET requests
		.post(postUploadCtrl); //POST requests

	appRouter.get('/csv', getCsvCtrl); //see CSV files in DB

	return appRouter;
}