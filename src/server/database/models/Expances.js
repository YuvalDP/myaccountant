const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpancesSchema = new Schema({
    reasonToExpance: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    createdDate:{
        type: Date,
        default: Date.now
    },
    dateOfExpances:{
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = Expances = mongoose.model('expance', ExpancesSchema);
