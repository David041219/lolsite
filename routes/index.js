var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/getdata', function(req, res, next) {
console.log('가져옴', req.body);  
return res.json({
  'searchid': req.body.searchid,
  'data': '벌레다'
});
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: '롤 전적검색' });
});
module.exports = router;

