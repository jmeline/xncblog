var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express',
      name: 'Jacob'
  });
});

router.get('/blog', function(req, res, next){
    res.render('./sidebar_links/blog', {
    });
});
router.get('/programming', function(req, res, next){
    res.render('./sidebar_links/programming', {
    });
});

module.exports = router;
