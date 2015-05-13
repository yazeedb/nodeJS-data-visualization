var getHomeCtrl = require('../controllers/getHome.js'),
	getUploadCtrl = require('../controllers/getUpload.js'),
	postUploadCtrl = require('../controllers/postUpload.js'),
	chartCtrl = require('../controllers/chartCtrl.js');
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

	appRouter.get('/question1', chartCtrl.question1); //Chart for question 1
	appRouter.get('/question2', chartCtrl.question2); //List of all colleges
	appRouter.get('/question2/:id', chartCtrl.question2Detail); //Chart for question 2
	appRouter.get('/question3', chartCtrl.question3); //List of all colleges
	appRouter.get('/question3/:id', chartCtrl.question3Detail); //Chart for question 3

	//Each API for three questions
	appRouter.get('/api/question1', question1Ctrl);
	appRouter.get('/api/question2/:id', question2Ctrl);
	appRouter.get('/api/question3/:id', question3Ctrl);

	return appRouter;
}