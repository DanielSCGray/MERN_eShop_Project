const mongoose = require('mongoose');

//change all occurance from grill

const GrillSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, 'ItemName is required'],
        minlength: [2, 'ItemName must be at least 2 characters']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        minlength: [2, 'Image must be at least 2 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [2, 'Description must be at least 2 characters']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        minlength: [2, 'Brand must be at least 2 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must not be negative']
    },
    burners: {
        type: Number,
        required: [true, 'Burners is required'],
        min: [1, 'Grill must have at least one Burner']
    },
    stock: {
        type: Number,
        required: [true, 'TotalStock is required'],
        min: [0, 'TotalStock must not be negative']
    },
    inStock: {
        type: Boolean,
        required: [true, 'InStock is required'],
        default: true
    }
}, {timestamps: true});

const Grill = mongoose.model('Grill', GrillSchema);

module.exports = Grill;
