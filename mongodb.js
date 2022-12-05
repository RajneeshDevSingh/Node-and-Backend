const {MongoClient} = require("mongodb");

const url  = 'mongodb://localhost:27017'
const dataBase = 'e-comm'
const client = new MongoClient(url)

async function dbConnect()
{
    let result =await client.connect();
    let db = result.db(dataBase)

    return db.collection('products')
    // let collection = db.collection('products')
    // let response = await collection.find({}).toArray();
    // console.log(response)
}

module.exports = dbConnect;