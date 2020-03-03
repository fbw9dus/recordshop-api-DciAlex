const express = require('express')
const router = express.Router()
var {DataStore} = require('notarealdb')


var store = new DataStore('./data')
var track = store.collection('track')

router.get('/',(req, res)=>{
    res.json(track.list())
})
router.post('/',(req, res)=>{
    var data = req.body
    track.create(data)
    res.json(track.list())
})

module.exports = router