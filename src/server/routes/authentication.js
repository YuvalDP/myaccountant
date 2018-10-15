const express = require('express');
const Router = express.Router();
const User = require('../database/models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

Router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('email', email, 'password', password);
        User.find({ email: email }, (err, docs) => {
            if(err) {
                res.status(501).json({ message: 'Internal server error !' });
            }
            if(docs.length === 1) {
                console.log('docs[0] = ', docs[0]);
                const isValidPassword = bcrypt.compareSync(password, docs[0].password);
                if(isValidPassword) {
                    console.log('docs', docs);
                    const { email, username, lastname, _id } = docs[0];
                    const payload = {
                        email,
                        username,
                        lastname,
                        _id
                    }
                    console.log('env', process.env.SECRET_KEY);
                    const token = jwt.sign(payload, process.env.SECRET_KEY);
                    res.send({ token });
                }else{
                    res.status(401).json({ message: 'Invalid Password !' });
                }

            } else if (docs.length > 1){
                res.send(401).json({ message: 'Internal server error !'});
            } else {
                res.send(422).json({ message: 'Bad Request !' });
            }

        });

});


module.exports = Router;