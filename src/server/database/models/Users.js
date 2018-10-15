const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    IsVerfiy: {
        type: Boolean,
        default: false
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);