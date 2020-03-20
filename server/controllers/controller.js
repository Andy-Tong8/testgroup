const mongoose = require('mongoose')
const PrimaryObject = mongoose.model('PrimaryObject')
module.exports = {
    create: (req, res) => {
        PrimaryObject.create(req.body)
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    find: (req, res) => {
        PrimaryObject.find().sort({createdAt: -1})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    findOne: (req, res) => {
        PrimaryObject.findOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    updateOne: (req, res) => {
        PrimaryObject.updateOne({ _id: req.params.id }, req.body, {new:true, runValidators:true})
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
    deleteOne: (req, res) => {
        PrimaryObject.deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(error => res.json(error))
    },
}