var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');
  return res.json({
    result: 1
  });
});
router.post('/', function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');
  return res.json({
    result: 1
  });
});

module.exports = router;
