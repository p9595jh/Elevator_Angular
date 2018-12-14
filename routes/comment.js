var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elevator');

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/', function(req, res) {
    if ( req.body.board == 'free' ) {
        var Board = require('./freeboard.js');
        Board.findOne({_id: req.body._id}, function(err, frees) {
            if ( err ) {
                console.log("Error in handling comment");
                return res.json({
                    success: false,
                    msg: 'database failure'
                });
            }

            var num = 0;
            if ( frees.comment.length > 0 ) {
                for (var i=0; i<frees.comment.length; i++) {
                    if ( num < frees.comment[i].num )
                        num = frees.comment[i].num;
                }
                num++;
            }
            var id = req.session.userid;
            var nickname = req.session.nickname;
            var date = new Date();
            var writedate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
            var comment = req.body.comment;
            if ( comment == '' ) comment = '#';
            var data = {num: num, id: id, nickname: nickname, writedate: writedate, comment: comment};
            Board.updateOne({_id: req.body._id}, {$push: {comment: data}}, function(err1, output) {
                if ( err1 ) {
                    return res.json({
                        success: false,
                        msg: 'database failure'
                    });
                }
                else {
                    return res.json({
                        success: true,
                    });
                }
            });
        });
    }
    else if ( req.body.board == 'music' ) {
        var Board = require('./musicclass.js');
        Board.findOne({_id: req.body._id}, function(err, musics) {
            if ( err ) {
                console.log("Error in handling comment");
                return res.json({
                    success: false,
                    msg: 'database failure'
                });
            }

            var num = 0;
            if ( musics.comment.length > 0 ) {
                for (var i=0; i<musics.comment.length; i++) {
                    if ( num < musics.comment[i].num )
                        num = musics.comment[i].num;
                }
                num++;
            }
            var id = req.session.userid;
            var nickname = req.session.nickname;
            var date = new Date();
            var writedate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            var comment = req.body.comment;
            if ( comment == '' ) comment = '#';
            var data = {num: num, id: id, nickname: nickname, writedate: writedate, comment: comment};
            Board.updateOne({_id: req.body._id}, {$push: {comment: data}}, function(err1, output) {
                if ( err1 ) {
                    return res.json({
                        success: false,
                        msg: 'database failure'
                    });
                }
                else {
                    return res.json({
                        success: true,
                    });
                }
            });
        });
    }
    else {
        var Board = require('./subcontents.js');
        Board.findOne({_id: req.body._id}, function(err, subs) {
            if ( err ) {
                console.log("Error in handling comment");
                return res.json({
                    success: false,
                    msg: 'database failure'
                });
            }

            var num = 0;
            if ( subs.comment.length > 0 ) {
                for (var i=0; i<subs.comment.length; i++) {
                    if ( num < subs.comment[i].num )
                        num = subs.comment[i].num;
                }
                num++;
            }
            var id = req.session.userid;
            var nickname = req.session.nickname;
            var date = new Date();
            var writedate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            var comment = req.body.comment;
            if ( comment == '' ) comment = '#';
            var data = {num: num, id: id, nickname: nickname, writedate: writedate, comment: comment};
            Board.updateOne({_id: req.body._id}, {$push: {comment: data}}, function(err1, output) {
                if ( err1 ) {
                    return res.json({
                        success: false,
                        msg: 'database failure'
                    });
                }
                else {
                    return res.json({
                        success: true,
                    });
                }
            });
        });
    }
});

router.post('/insert', function(req, res) {
    const postNum = req.body.num;
    const id = req.body.id;
    const nickname = req.body.nickname;
    const writedate = req.body.writedate;
    const comment = req.body.comment;

    if ( req.body.board == 'free' ) {
        var Board = require('./freeboard.js');
        Board.findOne({num: postNum}, function(err, frees) {
            if ( err ) {
                return res.json({
                    success: false
                });
            }

            var num = 0;
            if ( frees.comment.length > 0 ) {
                for (var i=0; i<frees.comment.length; i++) {
                    if ( num < frees.comment[i].num )
                        num = frees.comment[i].num;
                }
                num++;
            }
            var data = {num: num, id: id, nickname: nickname, writedate: writedate, comment: comment};
            Board.updateOne({num: postNum}, {$push: {comment: data}}, function(err1, output) {
                if ( err1 ) {
                    return res.json({
                        success: false
                    });
                }
                else {
                    return res.json({
                        success: true
                    });
                }
            });
        });
    }
    else if ( req.body.board == 'music' ) {
        var Board = require('./musicclass.js');
        Board.findOne({num: postNum}, function(err, musics) {
            if ( err ) {
                return res.json({
                    success: false
                });
            }

            var num = 0;
            if ( musics.comment.length > 0 ) {
                for (var i=0; i<musics.comment.length; i++) {
                    if ( num < musics.comment[i].num )
                        num = musics.comment[i].num;
                }
                num++;
            }
            var data = {num: num, id: id, nickname: nickname, writedate: writedate, comment: comment};
            Board.updateOne({num: postNum}, {$push: {comment: data}}, function(err1, output) {
                if ( err1 ) {
                    return res.json({
                        success: false
                    });
                }
                else {
                    return res.json({
                        success: true
                    });
                }
            });
        });
    }
    else {
        var Board = require('./subcontents.js');
        Board.findOne({num: postNum}, function(err, subs) {
            if ( err ) {
                return res.json({
                    success: false
                });
            }

            var num = 0;
            if ( subs.comment.length > 0 ) {
                for (var i=0; i<subs.comment.length; i++) {
                    if ( num < subs.comment[i].num )
                        num = subs.comment[i].num;
                }
                num++;
            }
            var data = {num: num, id: id, nickname: nickname, writedate: writedate, comment: comment};
            Board.updateOne({num: postNum}, {$push: {comment: data}}, function(err1, output) {
                if ( err1 ) {
                    return res.json({
                        success: false
                    });
                }
                else {
                    return res.json({
                        success: true
                    });
                }
            });
        });
    }
});


module.exports = router;
