const dbConnect = require('./mongodb')

const updateData = async ()=>
{
    let data = await dbConnect();

    // let result = await data.updateOne(
    //     { name:"Just Check"} , { $set: {name : "note 4" , price:1400}}
    // )
    let result = await data.updateMany(
        {barnd:"Vivo"}, {$set :{price:Math.floor(Math.random() * 20000)}}
    )

    if(result.acknowledged)
    {
        console.log("All is well now" ,Math.floor(Math.random() * 20000))
    }
}

updateData()