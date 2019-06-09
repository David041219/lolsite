var express = require('express');
var router = express.Router();
var request = require('request');
var utf8 = require('utf8');

/* GET home page. */
router.post('/getdata', function (req, res, next) {
  console.log('가져옴', req.body.searchid);

  ///////////////////////

  var myreq = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
  var myid = utf8.encode(req.body.searchid)
  var mykey = "?api_key=RGAPI-0e9df7bc-0ab7-4fbb-a77c-ec1dfa0727bb"

  request(myreq + myid + mykey, function (error, response, body) {
    console.log('쨔스');
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    
    body = JSON.parse(body);
    
    return res.json({
      'searchid': req.body.searchid,
      'level': body.summonerLevel,
      'name': body.name,
    });

  });


});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('main', { title: '롤 전적검색' });
});
module.exports = router;

