var express = require('express');
var router = express.Router();
var Expance = require('../database/models/Expances');
const { check, validationResult  } = require('express-validator/check');

/* Add money record to Database  */
router.post('/addExpances', [
    check('amount').isInt().withMessage('Amount must be a number'),
    check('addedBy').exists().withMessage('addedBy parameter not found'),
    check('reasonToExpance').exists().withMessage('reasonToExpance parameter not found'),
    check('comment').exists().withMessage('comment parameter not found')
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    if (req.user) {
        const { amount, addedBy, comment, reasonToExpance, dateOfExpances } = req.body;
        let newExpance = new Expance({
            amount,
            addedBy,
            dateOfExpances,
            comment,
            reasonToExpance
        });
        newExpance.save()
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
