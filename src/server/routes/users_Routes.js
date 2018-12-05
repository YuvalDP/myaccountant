var express = require('express');
var router = express.Router();
var User = require('../database/models/Users');
var bcrypt = require('bcryptjs');
const { check, validationResult  } = require('express-validator/check');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You are calling users routes..');
});

router.post('/addUsers', [
    check('firstname').exists().withMessage('firstname parameter not found'),
    check('lastname').exists().withMessage('lastname parameter not found'),
    check('Gender').exists().withMessage('Gender parameter not found'),
    check('email').exists().withMessage('email parameter not found'),
    check('password').exists().withMessage('password parameter not found')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
  if (req.user) {
    const { firstname, lastname, Gender, city, email, password } = req.body;
      var hash = bcrypt.hashSync(password, 10);
    const userDoc = new User({
        firstname,
        lastname,
        Gender,
        city,
        email,
        password: hash
    });
    userDoc.save()
     .then((data) => {
      res.send(data);
    }).catch(err => {
      res.send(err);
    });
  } else {
    res.status(401).json({ message: 'Unauthorized user' });
  }
});

module.exports = router;
