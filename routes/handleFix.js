var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./user.js');
var mongoose = require('mongoose');
var formidable = require('formidable');
var fs = require('fs-extra');

mongoose.connect('mongodb://localhost:27017/elevator');

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/', function(req, res) {
    User.findOne({id: req.session.userid}, function(err, users) {
        if ( err ) {
            console.log("Error in handleRegi!!!!");
            return res.json({
                success: false,
                errmsg: 'database failure'
            })
        }
        console.log(req.body);
        var form = new formidable.IncomingForm();
        // form.uploadDir = '/uploadFiles';

        form.parse(req, function(err, fields, files) {
            console.log(fields);
            console.log(files);
            var password = fields.password;
            var passwordNew = fields.passwordNew;
            var nickname = fields.nickname;
            var genre = fields.genre;
            var introduction = fields.intro;

            if ( password != users.pw ) {
                return res.json({
                    success: false,
                    errmsg: '기존 비밀번호가 일치하지 않습니다',
                });
            }
            else if ( passwordNew == '' || nickname == '' ) {
                return res.json({
                    success: false,
                    errmsg: '* 표시된 칸은 모두 채워야 합니다',
                });
            }
            else {
                if ( files.image.name != '' ) {
                    var filePath = files.image.path;
                    fs.copy(filePath, 'public/images/profileimages/' + req.session.userid, function(err0) {
                        if ( err0 ) {
                            console.log('error in handling profile image');
                            console.log(err0);
                        }
                    });
                }

                User.updateOne({id: req.session.userid}, {pw: passwordNew, nickname: nickname, genre: genre, introduction: introduction}, function(err1, output) {
                    if ( err1 ) {
                        return res.json({
                            success: false,
                            errmsg: 'database failure'
                        })
                    }
                    else {
                        req.session.nickname = nickname;
                        return res.json({
                            success: true
                        });
                    }
                });
            }
        });
    });
});

module.exports = router;
