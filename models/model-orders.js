const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    title  :{
        type:  String,
        require: true    
    },
    artist :{ 
        type   :String,
        require: true
    },
    price  : {
        type   :Number,
        require:true
    },  
})

const ordersModel = mongoose.model('Order', ordersSchema)
module.exports = ordersModel