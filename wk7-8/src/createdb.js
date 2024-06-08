import { MongoClient } from 'mongodb';
var url = "mongodb://localhost:27017/cse536";
MongoClient.connect(url, function(err, db) {
  if (err) 
  {
    throw err;
  }
  console.log("Database created!");
  db.close();
});