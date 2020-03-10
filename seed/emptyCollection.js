// Mongoose importieren
const mongoose = require('mongoose')
// Model für Süßigkeiten importieren
const RecordsModel = require('../models/model-songs');

// Async function
(async function(){
    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlparser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

    try {
        await RecordsModel.deleteMany({})
        console.log('Collection geleert')
    } catch (error) {
        console.log(error)
    }

    mongoose.connection.close()
})()
