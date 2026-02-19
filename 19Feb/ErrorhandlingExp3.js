const Promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url).then(function(err,db){
    db.collection('Test').updateOne({name:"John"},{$set:{name:"John"}}).catch(error=> alert(error.message));    
})