var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Notice = require('./noticeModel.js');

mongoose.connect('mongodb://localhost:27017/elevator');

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/', function(req, res, next) {
    if ( req.session.userid != 'admin' ) {
        return res.json({
            success: false,
            msg: 'Not admin'
        });
    }

    var notice = new Notice();
    notice.id = req.session.userid;
    notice.nickname = req.session.nickname;
    notice.comment = req.body.comment;
    var date = new Date();
    notice.writedate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();

    Notice.find().sort({num:-1}).exec(function(err, notices) {
        if ( err ) {
            console.log("Error in notice.js");
            return res.json({
                success: false,
                msg: 'database failure'
            });
        }
        
        if ( notices.length == 0 ) notice.num = 0;
        else notice.num = notices[0].num + 1;
        notice.save(function(err) {
            if ( err ) {
                return res.json({
                    success: false,
                    msg: 'database failure'
                });
            }
            else {
                return res.json({
                    success: true
                });
            }
        });
    });
});

module.exports = router;
