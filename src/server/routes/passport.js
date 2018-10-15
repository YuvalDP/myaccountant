var passport = require('passport');
const passportJWT = require("passport-jwt");
var ExtractJwt = require('passport-jwt').ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = new JWTStrategy(opts, (jwt_payload, done) => {

    if(jwt_payload.email) {
        done(null, jwt_payload);
    } else {
        done(null, false)
    }
});