//use change all occurances of subjectname. Add or remove functions as needed
const Subjectname = require('../models/user.model');



// get all

module.exports.findAllSubjectnames = (req, res) => {
    Subjectname.find()
        .then((allSubjectnames) => {
            res.json(allSubjectnames)
        })
        .catch(err =>res.json(err));
}

// get one

module.exports.findOneSubjectname = (req, res) => {
    Subjectname.findOne({_id: req.params.id})
        .then((oneSubjectname) => {
            res.json(oneSubjectname)
        })
        .catch(err =>res.json(err));
}

// create

module.exports.createSubjectname = (req, res) => {
    Subjectname.create(req.body)
        .then(newSubjectname => {
            res.json(newSubjectname)
        })
        .catch(err =>res.status(400).json(err));
}

//update 

module.exports.updateSubjectname = (req, res) => {
    Subjectname.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedSubjectname) => {
            res.json(updatedSubjectname)
        })
        .catch(err =>res.status(400).json(err));
}


// delete one

module.exports.deleteOneSubjectname = (req, res) => {
    Subjectname.findByIdAndDelete(req.params.id)
        .then((deletedSubjectname) => {
            res.json(deletedSubjectname)
        })
        .catch(err =>res.json(err));
}