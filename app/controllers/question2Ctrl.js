var async = require('async'),
    College = require('../models/College'),
    Enrollment = require('../models/Enrollment');

module.exports = function(req, res) {
    var collegeData = [];
    Enrollment.findOne({}, {
        enrollment: {
            $elemMatch: {
                UNITID: req.params.id
            }
        }
    }, function(err, enrollment) {
        if (err) 
        	throw err;

        if (enrollment) {
            var UNITID = enrollment.enrollment[0].UNITID,
            	EFTOTLM = enrollment.enrollment[0].EFTOTLM,
            	EFTOTLW = enrollment.enrollment[0].EFTOTLW;

            College.findOne({}, {
                college: {
                    $elemMatch: {
                        UNITID: UNITID
                    }
                }
            }, function(err, college) {
                if (err) 
                	throw err;

                    res.json({
                        INSTNM: college.college[0].INSTNM,
                        UNITID: UNITID,
                        EFTOTLM: EFTOTLM,
                        EFTOTLW: EFTOTLW
                    });
            });
        }
    });
};
