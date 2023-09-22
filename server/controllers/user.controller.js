//use change all occurances of user. Add or remove functions as needed
const User = require('../models/user.model');



// get all

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
        .then((oneUser) => {
            res.json(oneUser)
        })
        .catch(err =>res.json(err));
}
module.exports.findByEmail = (req, res) =>{
    User.findOne({email: req.params.email})
        .then(user => {
            res.json(user)
        })
}

// create

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.json(newUser)
        })
        .catch(err =>res.status(400).json(err));
}

//update 

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedUser) => {
            res.json(updatedUser)
        })
        .catch(err =>res.status(400).json(err));
}


// delete one

module.exports.deleteOneUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((deletedUser) => {
            res.json(deletedUser)
        })
        .catch(err =>res.json(err));
}