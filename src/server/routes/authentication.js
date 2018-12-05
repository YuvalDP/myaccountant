const express = require('express');
const Router = express.Router();
const User = require('../database/models/Users');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

Router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('email', email, 'password', password);
        User.find({ email: email }, (err, docs) => {
            if (err) {
                res.status(501).json({message: 'Internal server error !'});
            }
            else if (docs.length === 1) {
                console.log('docs[0] = ', docs[0]);
                const isValidPassword = bcrypt.compareSync(password, docs[0].password);
                if (isValidPassword) {
                    console.log('docs', docs);
                    const {email, username, lastname, _id} = docs[0];
                    const payload = {
                        email,
                        username,
                        lastname,
                        _id
                    }
                    const token = jwt.sign(payload, process.env.SECRET_KEY);
                    res.send({token});
                } else {
                    res.status(401).json({message: 'Invalid Password !'});
                }

            } else if (docs.length > 1) {
                res.status(401).json({message: 'Internal server error !'});
            } else {
                res.status(402).json({message: 'Bad Request !'});
            }

        });

});

Router.post('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user) {
        res.send(req.user);
    }
    else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});


module.exports = Router;