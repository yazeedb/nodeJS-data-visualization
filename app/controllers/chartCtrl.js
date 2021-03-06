var College = require('../models/College'),
    Enrollment = require('../models/Enrollment.js'),
    Tuition = require('../models/Tuition.js');

exports.question1 = function (req, res) {
	res.render('question1.jade', { title: 'Question 1' });
};

//All colleges for question 2
exports.question2 = function (req, res) {
	Enrollment.find({}, function(err, enrollment) {
        if (err) 
        	return err;

        College.find({}, function(error, college) {
            if (error) 
            	return error;
            
            res.render('allColleges.jade', {
                title: 'Select a College',
                url: '/question2/',
                colleges: college[0].college
            });
        });
    });
};

//Individual college for question 2
exports.question2Detail = function (req, res) {
	res.render('question2.jade', { title: 'Question 2' });
};

//All colleges for question 3
exports.question3 = function (req, res) {
    Tuition.find({}, function(err, tuition) {
        if (err) 
            return err;

        College.find({}, function(error, college) {
            if (error) 
                return error;

            res.render('allColleges.jade', {
                title: 'Select a College',
                url: '/question3/',
                colleges: college[0].college
            });
        });
    });
};

//Individual college for question 3
exports.question3Detail = function (req, res) {
    res.render('question3.jade', { title: 'Question 3'});
};