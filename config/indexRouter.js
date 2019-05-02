let router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('Hello World with Express');
});

module.exports = router;