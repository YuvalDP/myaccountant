var express = require('express');
var router = express.Router();
var db = require('../database/models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You are calling users routes..');
});

router.get('/getUsers', (req, res) => {

});

module.exports = router;
