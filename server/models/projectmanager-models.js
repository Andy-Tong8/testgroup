const mongoose = require('mongoose');

// const customFunction = (arg) => {
//     if(arg.length == 0) {
//         return true
//     } else if(arg.length < 3){
//         return false
//     } else {
//         return true
//     }
// }
const Projects = new mongoose.Schema({
    name:{
        type:String,
        unique: [true, "BACKEND: Project already exists"],
        minlength:[3, "BACKEND: Project name must be at least 3 characters"]
    },
    dueDate: {
        type: Date,
        required: [true, "BACKEND: Due Date is required"]
    },
    status: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

mongoose.model("Project", Projects);

