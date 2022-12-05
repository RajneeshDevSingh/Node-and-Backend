const express = require('express');

const dbConnect = require("../mongodb")

const app = express();


// #################################################################
// app.get('/' , async(req , resp)=>
// {
//     let data = await dbConnect();

//     data = await data.find().toArray()

//     console.log(data)
//     resp.send(data)

// })

// #################################################################

// app.use(express.json()); // to get req from postman 
// app.post('/' , async (req,resp)=>
// {
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body)

//     resp.send(result)

// })



// #################################################################
app.use(express.json()); // to get req from postman 

app.put("/" , async(req , resp)=>
{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:"mi"},
        {$set:req.body}
    )
    resp.send({result:"Updated "})
})


// #################################################################
app.listen(5000)