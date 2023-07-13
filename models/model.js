const mongoose = require('mongoose');

const ProdSchema=new mongoose.Schema({
    name:{
        type:String
    },
    quantity:{
        type:Number
    }
})

const Product=mongoose.model('Product',ProdSchema);


module.exports=Product;