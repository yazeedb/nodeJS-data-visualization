var async = require('async'),
    College = require('../models/College.js'),
    Enrollment = require('../models/Enrollment.js');

module.exports = function(req, res) {
    var top10 = [];
    
    Enrollment.findOne({}, function(err, data) {
        if (err) 
            throw err;

        var array = data.enrollment.sort(function (a, b) {
            if (parseInt(a.EFTOTLT) > parseInt(b.EFTOTLT))
                return 1;
            if (parseInt(a.EFTOTLT) < parseInt(b.EFTOTLT))
                return -1;
            return 0;
        }).reverse();

        array.splice(10);

        async.forEach(array, function (school, callback) {
            College.findOne({}, {
                college: {
                    $elemMatch: { UNITID: school.UNITID }
                }
            }, function (err, data) {
                if (err) 
                    throw err;
                var topSchool = {};
                topSchool.name = data.college[0].INSTNM;
                topSchool.enrollment = school;
                top10.push(topSchool);
                callback();
            });
        }, function (err) {
            if (err) 
                throw err;
            res.json(top10);
        });
    });
};
