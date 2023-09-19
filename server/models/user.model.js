const mongoose = require('mongoose');

//change all occurance from user

const UserSchema = new mongoose.Schema({
    strkey: {
        type: String,
        required: [true, 'Strkey is required'],
        minlength: [5, 'Strkey must be at least 5 characters']
    },
    strkey: {
        type: String,
        required: [true, 'Strkey is required'],
        minlength: [5, 'Strkey must be at least 5 characters']
    },
    strkey: {
        type: String,
        required: [true, 'Strkey is required'],
        minlength: [5, 'Strkey must be at least 5 characters']
    },
    address: {
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        },
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        },
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        },
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        }
        },
    payment: {
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        },
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        },
        strkey: {
            type: String,
            required: [true, 'Strkey is required'],
            minlength: [5, 'Strkey must be at least 5 characters']
        }
    },
    cart: []

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;
