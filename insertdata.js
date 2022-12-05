const dbConnect = require('./mongodb')


const insertdata = async ()=>
{

    const db = await dbConnect();

    // const result = await db.insertOne({
    //     name:"note 5",
    //     brand:"Vivo",
    //     price:1500,
        
    // })

    const result = await db.insertMany([
        {name:"note 6",brand:"Vivo",price:1600,},
        {name:"note 7",brand:"Vivo",price:1700,},
        {name:"note 8",brand:"Vivo",price:1800,},
        {name:"note 9",brand:"Vivo",price:1900,},
        {name:"note 10",brand:"Vivo",price:2000,},
        {name:"note 11",brand:"Vivo",price:2100,},
        
    ])

    if(result.acknowledged)
    {
        console.log("data inserted ")
    }
}


insertdata();
