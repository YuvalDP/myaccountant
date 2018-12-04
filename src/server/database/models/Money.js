const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoneySchema = new Schema({
    addedBy: {
        type: String,
        required: true
    },
    givenBy: {
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
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = Money = mongoose.model('money', MoneySchema);