const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema  = new mongoose.Schema(
    {
        name:String,
        brand:String,
        price:Number,

    }
);

const insertInDb = async ()=>
{
    const Product =  mongoose.model('products' , productSchema)
    let data = new Product({name:"i phone 10" , brand:"apple", price:70000})

    const result = await data.save();
    console.log(result)

}

// insertInDb()

const UpdateInDb = async ()=>
{
    const Product =  mongoose.model('products' , productSchema)
    let data = await Product.updateOne(
        {name:'note 15'},
        {$set:{price:25000}}
    )

    console.log(data)
}

// UpdateInDb();


const DeleteInDb = async ()=>
{
    const Product =  mongoose.model('products' , productSchema)
    let data = await Product.deleteOne({name:"i phone 10"})

    console.log(data)

}

// DeleteInDb();

const FindInDb = async ()=>
{
    const Product =  mongoose.model('products' , productSchema)
    let data = await Product.find({name:"note 15"})

    console.log(data)

}

FindInDb();