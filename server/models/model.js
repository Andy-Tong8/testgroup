const mongoose = require('mongoose')

const customFunction = (arg) => {
    if(arg.length == 0) {
        return true
    } else if(arg.length < 5){
        return false
    } else {
        return true
    }
}
const PrimaryObjectSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: [2,"Name must be at least 2 characters"]
    },
    description: {
        type: String,
        validate: [customFunction,"Description must be at least 5 caheacters"]
    },
    status:{
        type:[Number],
        default:[0,0,0,0,0]
    },
    team:{
        type: String,
        default:'white'
    }
},{timestamps:true})

mongoose.model('PrimaryObject', PrimaryObjectSchema);