var College = require('../models/College'),
    Tuition = require('../models/Tuition');

module.exports = function(req, res) {
	console.log(req.params);
    Tuition.findOne({}, {
        tuition: {
            $elemMatch: {
                UNITID: req.params.id
            }
        }
    }, function(err, tuition) {
        if (err) 
        	return err;

        var UNITID = tuition.tuition[0].UNITID;
        var Tuition09 = tuition.tuition[0]['09_Tuition'];
        var Tuition10 = tuition.tuition[0]['10_Tuition'];
        var Tuition11 = tuition.tuition[0]['11_Tuition'];

        College.findOne({}, {
            college: {
                $elemMatch: {
                    UNITID: UNITID
                }
            }
        }, function(err, college) {
            if (err) 
            	return err;

            res.json({
                INSTNM: college.college[0].INSTNM,
                UNITID: UNITID,
                Tuition09 : Tuition09,
                Tuition10 : Tuition10,
                Tuition11 : Tuition11
            });
        });
    });
};
