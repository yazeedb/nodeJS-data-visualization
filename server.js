var express = require('express'),
	app = express(),
	path = require('path'),
	mongoose = require('mongoose'),
	parseCsv = require('./controllers/parseCsv.js'),
	multer = require('multer');

mongoose.connect('mongodb://localhost/csvApp');

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({
	dest: './controllers/uploads',
	onFileUploadComplete: function (file) {
		parseCsv(file.path);
	}
}));

//Non-minified HTML source code
app.locals.pretty = true;

//homepage route
app.get('/', function (req, res) {
	res.render('index.jade', { title: 'Home' });
});

app.get('/upload', function (req, res) {
	res.render('upload.jade', { title: 'Upload' });
});

app.route('/csv')

	.get()

	.post(function (req, res) {
		res.redirect('/');
	});



app.listen(PORT);