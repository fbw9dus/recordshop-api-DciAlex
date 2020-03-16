const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username  :{
        type:  String,
        require: true    
    },
    email :{ 
        type   :String,
        require: true
    },
    pass   :{ 
        type   :String,
        require: true
    },
    firstName:{
        type: String,
        require: true
    },
    lastName :{
        type: String,
        require:true
    }
})

const UsersModel = mongoose.model('User', usersSchema)
module.exports = UsersModel