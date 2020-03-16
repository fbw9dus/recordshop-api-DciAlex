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
                title : faker.name.jobTitle(),
                artist:faker.name.firstName(),
                img   :faker.image.people(),
                year  :faker.random.number(),
                price :faker.commerce.price()
            })
            return records.save()
        })

    const datauserPromises = Array(10)
        .fill(null)
        .map(() => {
            const users = new RecordsModel({
                username    :faker.name.firstName(),
                email       :faker.internet.email(),
                firstName   :faker.name.firstName(),
                lastName    :faker.name.lastName()
                
            })
            return users.save()
        })

    try {
        await Promise.all([...dataPromises,...datauserPromises])
        console.log('Fake Records data in DB created')
        // await Promise.all(datauserPromises)
        console.log('Fake User data in DB created')
    } catch (error) {
        console.log(error)
    }
    mongoose.connection.close()
})()
