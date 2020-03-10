// Pseudo-DB-Bibliothek importieren
var { DataStore } = require('notarealdb')
// Pseudo-DB erstellen
var store = new DataStore('./data')
// Collection für Shop-Artikel
var records = store.collection('records')

// Funktion um Liste der Artikel zurückzugeben
exports.getRecords = (req, res, next) => {
    res.status(200).send(records.list());
    
}

// Funktion um neuen Aretikel hinzuzufügen
exports.addRecord = (req, res, next) => {
    const record = req.body;
    records.create(record)
    res.status(200).send(record);
}


exports.getId = (req, res, next) =>{
    const record = req.body
    record.id = req.params.recordId
    res.send(record)
    
}
exports.delRecord = (req, res, next) =>{
    const record = req.body;
    record.id = req.params.recordId
    records.delete(record.id)
    res.send(record)
}




// exports.putRecord = (req, res, next) =>{
//     const record = req.body
// }
// exports.getId = (req ,res ,next) =>{
//     const reqID = req.params.id
    
//     let record = records.filter(record =>{
//         return record.id == reqID 
//     });
//     if(!record){
//         response.status(404).json({message:'Faill no id'});
//     }
//     response.json(record[0]);
    
// }
// exports.putRecord=  (req ,res ,next) =>{
//     const reqID = req.params.id;

//     let record = records.filter(record=>{

//         return records.id == reqID
//     })[0]
//     const index = records.indexOF(records)
    
// }