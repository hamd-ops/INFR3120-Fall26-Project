let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('layout', {
    title: 'Home',
    page: 'index',
    message: ''
  });
});

module.exports = router;