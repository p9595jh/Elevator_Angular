var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./user.js');

mongoose.connect('mongodb://localhost:27017/elevator');

router.get('/', function(req, res, next) {
    if ( req.session.userid != 'admin' ) {
        console.log("invalid access");
        return res.json({
            result: false,
            msg: 'invalid access'
        })
    }

    User.find(function(err, users) {
        return res.json({
            result: true,
            users: users,
            user: {
                id: req.session.userid,
                nickname: req.session.nickname,
                stop: req.session.stop,
                joindate: req.session.joindate,
                boardRequest: req.session.boardRequest
            }
        });
    });
});

module.exports = router;
