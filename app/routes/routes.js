var getHomeCtrl = require('../controllers/getHome.js'),
	getUploadCtrl = require('../controllers/getUpload.js'),
	postUploadCtrl = require('../controllers/postUpload.js'),
	question1Ctrl = require('../controllers/question1Ctrl.js'),
	question2Ctrl = require('../controllers/question2Ctrl.js'),
	question3Ctrl = require('../controllers/question3Ctrl.js');

module.exports = function (app, express) {
	//router for the app
	var appRouter = express.Router();

	appRouter.get('/', getHomeCtrl); //home page

	appRouter.route('/upload') //upload CSV page
		.get(getUploadCtrl) //GET requests
		.post(postUploadCtrl); //POST requests

	//Three questions
	appRouter.get('/question1', question1Ctrl);
	appRouter.get('/question2', question2Ctrl);
	appRouter.get('/question3', question3Ctrl);

	return appRouter;
}