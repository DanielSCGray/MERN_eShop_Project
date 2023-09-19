const mongoose = require('mongoose');

//change all occurance from user

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minlength: [2, 'First Name must be at least 2 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minlength: [5, 'Last Name must be at least 5 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [5, 'Email must be at least 5 characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [2, 'Password must be at least 2 characters']
    },
    address: {
        street: {
            type: String,
            required: [true, 'Street is required'],
            minlength: [5, 'Street must be at least 5 characters']
        },
        city: {
            type: String,
            required: [true, 'City is required'],
            minlength: [5, 'City must be at least 5 characters']
        },
        state: {
            type: String,
            required: [true, 'State is required'],
            minlength: [2, 'State must be at least 2 characters']
        },
        zipcode: {
            type: String,
            required: [true, 'Zipcode is required'],
            minlength: [5, 'Zipcode must be at least 5 characters']
        }
        },
    payment: {
        cardName: {
            type: String,
            required: [true, 'CardName is required'],
            minlength: [5, 'CardName must be at least 5 characters']
        },
        cardNumber: {
            type: String,
            required: [true, 'CardNumber is required'],
            minlength: [5, 'CardNumber must be at least 5 characters']
        },
        expiration: {
            type: String,
            required: [true, 'Expiration is required'],
            minlength: [5, 'Expiration must be at least 5 characters']
        }
    },
    cart: []

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;
