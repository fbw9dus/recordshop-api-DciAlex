/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const dbURIL = "mongodb://localhost:27017/animalshelter"
/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recordsRouter = require('./routes/records');
const { setCors } = require("./middleware/security");

/** INIT */
const app = express();
// Mongo Server
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose');
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true} )
mongoose.connection.on('error',console.error())
mongoose.connection.on('open', ()=>{
    console.log("Databank connected")
})
var animalSchemat = new mongoose.Schema({
    name:String,
    type:String
})
var animalModel = mongoose.model('Animal', animalSchemat)
var newAnimal = new animalModel({name:"Bil",type:"cat"})
newAnimal.save()

var userScemat = new mongoose.Schema({
    name:String,
    type:String
})
var userModel = mongoose.model('User',userScemat);
var neUser = new userModel({name:"Gica",lastVisit:'User'})
newUser.save()
var allUser = await userModel.find()
console.log(allUser)
// var client = new MongoClient("mongodb://localhost:27017/animalshelter",{useUnifiedTopology:true})
///Connect Mongo server
// MongoClient.connect("mongodb://localhost:27017/animalshelter",{useUnifiedTopology:true} (err,db)=>{
//     if(err){
//     return console.log(err)
// }
//     console.log("Connect it to DataBank")
// })
// async function connectDB() {
//     try{
//         await client.connect();

//         await listDatabases(client);

//         var db = client.db("animalshelter");
//         var animalsClolection = await db.collection("animals")
//         // var newAnimal = await animalsClolection.insertOne({type:"caine" ,name:"gica"})
//         var updateAnimal = await animalsClolection.update({name:"gica"},{$set:{color:"red"}})
//         // var delAnimal = await animalsClolection.deleteOne({})
//         var allAnimals = await animalsClolection.find({}).toArray()     
//         console.log(allAnimals)
//     } catch (e){
//         console.log(e)
//     }
//     console.log("Connect it to DataBank")
// }
// connectDB()

// async function listDatabases(client){
//     var databases = await client.db().admin().listDatabases()
//     console.log("Databases:");
//     databases.databases.forEach(db => console.log(`- ${db.name}`))
// }

/** LOGGING */
app.use(logger('dev'));


/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/records', recordsRouter);

/** EXPORT PATH */
module.exports = app;
