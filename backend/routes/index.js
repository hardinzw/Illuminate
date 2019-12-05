var express = require('express');
var router = express.Router();

/* GET Dashboard. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Illuminate Bugs' });
});

module.exports = router;