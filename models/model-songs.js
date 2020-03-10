const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema({
    title  :{
        type:  String,
        require: true    
    },
    artist :{ 
        type   :String,
        require: true
    },
    img :{ 
        type   :String,
        require: true
    },
    year   :{ 
        type   :Number,
        require: true
    },
    price  : {
        type   :Number,
        require:true
    },  
})

const RecordsModel = mongoose.model('Song', recordsSchema)
module.exports = RecordsModel