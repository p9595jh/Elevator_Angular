var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./user.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elevator');

router.use(bodyParser.urlencoded({ extended: true }));
router.post('/', function(req, res) {
    User.findOne({id: req.body.id, pw: req.body.password}, function(err, users) {
        if ( err ) {
            console.log("error!!!!");
            res.status(500).send({ error: 'database failure' });
            return res.json({
                success: false,
                msg: err
            });
        }
        if ( users == null ) {
            console.log("Failed to login (null)");
            return res.json({
                success: false,
                msg: "Failed to login (null)"
            });
        }
        else if ( users.length === 0 ) {
            console.log("Failed to login (length == 0)");
            return res.json({
                success: false,
                msg: "Failed to login (length == 0)"
            });
        }
        else {
            req.session.userid = users.id;
            req.session.nickname = users.nickname;
            req.session.stop = users.stop;
            req.session.joindate = users.joindate;
            req.session.boardRequest = users.boardRequest;
            return res.json({
                success: true,
                user: users
            });
        }
    });
});
router.get('/data', function(req, res) {
    if ( !req.session.userid ) {
        return res.json({
            result: false
        });
    }
    User.findOne({id: req.session.userid}, function(err, output) {
        if (err) {
            console.log("error in /login/data")
            return res.json({
                result: false,
                msg: err
            });
        }
        else {
            return res.json({
                result: true,
                user: output
            });
        }
    })
})
router.get('/ng', function(req, res) {
    if ( req.session.userid ) {
        return res.json({
            result: true
        });
    }
    else {
        return res.json({
            result: false
        });
    }
});
router.post('/checklogin', function(req, res) {
    User.findOne({id: req.body.id, pw: req.body.pw}, function(err, users) {
        if (err) {
            res.json({id: ""});
            return;
        }
        res.send(users);
    });
});

module.exports = router;
