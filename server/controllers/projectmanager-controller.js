const mongoose = require('mongoose');
const Project = mongoose.model("Project");

module.exports = {
    readAll : (req, res) => {
        Project.find().sort({dueDate: req.params.sort})
            .then(response => res.json(response))
            .catch(error => res.status(400).json(error))
    },
    readOne : (req, res) => {
        Project.findOne({_id:req.params.id})
            .then(response => res.json(response))
            .catch(error => res.status(400).json(error))
    },
    create : (req, res) => {
        Project.create(req.body)
            .then(response => res.json(response))
            .catch(error => res.status(400).json(error))
            
    },
    updateOne : (req, res) => {
        Project.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then(response => res.json(response))
            .catch(error => res.status(400).json(error))
    },
    deleteOne : (req, res) => {
        Project.deleteOne({_id:req.params.id})
            .then(response => res.json(response))
            .catch(error => res.status(400).json(error))
    },
}