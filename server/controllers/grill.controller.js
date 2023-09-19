//use change all occurances of grill. Add or remove functions as needed
const Grill = require('../models/grill.model');



// get all

module.exports.findAllGrills = (req, res) => {
    Grill.find()
        .then((allGrills) => {
            res.json(allGrills)
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneGrill = (req, res) => {
    Grill.findOne({_id: req.params.id})
        .then((oneGrill) => {
            res.json(oneGrill)
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createGrill = (req, res) => {
    Grill.create(req.body)
        .then(newGrill => {
            res.json(newGrill)
        })
        .catch(err =>res.status(400).json(err));
}

//update 

module.exports.updateGrill = (req, res) => {
    Grill.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedGrill) => {
            res.json(updatedGrill)
        })
        .catch(err =>res.status(400).json(err));
}


// delete one

module.exports.deleteOneGrill = (req, res) => {
    Grill.findByIdAndDelete(req.params.id)
        .then((deletedGrill) => {
            res.json(deletedGrill)
        })
        .catch(err =>res.json(err));
}