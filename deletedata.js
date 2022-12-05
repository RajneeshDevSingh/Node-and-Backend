const dbConnect = require('./mongodb')

const deleteData = async()=>
{
    let data = await dbConnect();

    // let result = await data.deleteOne({name : "m 40"})
    let result = await data.deleteMany({name : "note 11"})

    // if (result.deletedCount === 1) {
    //     console.log("Successfully deleted one document.");
    //   } else {
    //     console.log("No documents matched the query. Deleted 0 documents.");
    //   }
}

deleteData();