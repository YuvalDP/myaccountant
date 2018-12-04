var express = require('express');
var router = express.Router();
var Money = require('../database/models/Money');
const { check, validationResult  } = require('express-validator/check');

/* Add money record to Database  */
router.post('/addMoney', [
    check('amount').isInt().withMessage('Amount must be a number'),
    check('addedBy').exists().withMessage('addedBy parameter not found'),
    check('givenBy').exists().withMessage('givenBy paramter not found'),
    check('comment').exists().withMessage('comment parameter not found')
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    if (req.user) {
        const { amount, addedBy, givenBy, comment } = req.body;
        let newMoney = new Money({
           amount,
            addedBy,
            givenBy,
            comment
        });
        newMoney.save()
            .then((data) => {
                console.log(data);
                res.send(data);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            })
    } else {
        res.status(401).json({ message: 'User unauthorized' });
    }
});

module.exports = router;
