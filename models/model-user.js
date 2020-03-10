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
    }  
})

const UsersModel = mongoose.model('User', UsersSchema)
module.exports = UsersModel