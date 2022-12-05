// const express = require('express')
// const path = require('path')

// const app = express();
// const publicPath = path.join(__dirname , 'public')

// // app.use(express.static(publicPath))
// // console.log(publicPath)
// // app.listen(5000)


// app.set('view engine' , 'ejs');

// app.get('' , (req , resp) =>
// {
//     resp.sendFile(`${publicPath}/index.html`)
// });


// app.get('/help',(req , resp)=>
// {
//     resp.sendFile(`${publicPath}/help.html`)
// });

// app.get('/profile' , (req , resp)=>
// {
//     const user = 
//     {
//         name : 'Rajneesh',
//         email:'@Rajneesh.com',
//     }

//     resp.render('profile' , {user})
// })

// app.listen(5000)




// ####################################################
// connection with mongo

const {MongoClient} = require("mongodb");

const url  = 'mongodb://localhost:27017'
const dataBase = 'e-comm'
const client = new MongoClient(url)

async function getData()
{
    let result =await client.connect();
    let db = result.db(dataBase)
    let collection = db.collection('products')
    let response = await collection.find({}).toArray();
    console.log(response)
}

getData();