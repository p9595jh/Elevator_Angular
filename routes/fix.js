var express = require('express');
var router = express.Router();
var User = require('./user.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elevator');

router.get('/', function(req, res, next) {
    User.findOne({id: req.session.userid}, function(err, users) {
        if ( err ) {
            console.log("error!!!!");
            return res.json({
                error: 'database failure'
            })
        }

        return res.json({
            user: users,
            errmsg: ''
        });
    });
});

module.exports = router;
