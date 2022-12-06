const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema  = new mongoose.Schema(
    {
        name:String,
        brand:String,
        price:Number,

    }
);

const main = async ()=>
{
    const Product =  mongoose.model('products' , productSchema)
    let data = new Product({name:"i phone 10" , brand:"apple", price:70000})

    const result = await data.save();
    console.log(result)

}

main();