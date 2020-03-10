// Mongoose importieren
const mongoose = require('mongoose')
// Faker importieren
const faker = require('faker')
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

    const dataPromises = Array(10)
        .fill(null)
        .map(() => {
            const records = new RecordsModel({
                title: faker.name.jobTitle(),
                artist:faker.name.firstName(),
                img   :faker.image.avatar(),
                year  :faker.random.number(),
                price :faker.commerce.price()
            })
            return records.save()
        })

    try {
        await Promise.all(dataPromises)
        console.log('Fake data in DB created')
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
})()
