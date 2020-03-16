/** EXTERNAL DEPENDENCIES */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

/** ROUTERS */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recordsRouter = require('./routes/records');
const ordersRouter = require('./routes/orders');
const { setCors } = require("./middleware/security");


const mongoose = require('mongoose')
const RecordsModel = require('./models/model-songs');
const UsersModel = require('./models/model-user')
/** INIT */
const app = express();

/** LOGGING */
app.use(logger('dev'));


/** SETTING UP LOWDB */
// const adapter = new FileSync('data/db.json');
// const db = low(adapter);
// db.defaults({
//     records: [],
//     users: [],
//     orders: []
// }).write();  s

(async function(){
    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlparser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    try {
        const allrecordss = await RecordsModel.find()
        allrecordss.forEach(records =>{
              console.log(
                  ` Title: ${records.title},
                    Artist: ${records.artist},
                    Year: ${records.year},
                    Price: ${records.price}`)
            })
        // const allUser = await UsersModel.find()
        // allUser.forEach(users =>{
        //     console.log(
        //         `${users.username},
        //         ${users.firstName}
        //         `)
        // })
        }  
         catch (error) {
            console.log(error)
        }
    
})()
/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(setCors);

/** STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES */
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/records', recordsRouter);
// app.use('/orders', ordersRouter);

/** ERROR HANDLING */
app.use(function (req, res, next) {
    const error = new Error('Looks like something broke...');
    error.status = 400;
    next(error);
});

app.use(function (err, req, res, next) {
    res.send({
        error: {
            message: err.message
        }
    });
});


/** EXPORT PATH */
module.exports = app;
