const Product=require('../models/model');


//fetch all the products
module.exports.getProducts=async (req,res)=>{
    try{
       const product=await Product.find();
    //    console.log(product);
       return res.send(product);
    }
    catch(err){
        return res.send("Error in finding products")
    }
}


//create products
module.exports.createProduct=(req,res)=>{
   const product=new Product(
    {name:req.body.name,quantity:req.body.quantity}
   );
   product.save().then((prod)=>{
     res.send({message:"product added successfully"});
   }).catch((err)=>{
        console.log(err);
   })
}


//delete products
module.exports.deleteProduct=async (req,res)=>{
    const Id=req.params.id;
    try{
    const prod=await Product.deleteOne({_id:Id});
     console.log(prod);
    return res.send({message:"product is deleted"});
    }
    catch(err){
        return res.send("Error is occuring while deleting a product");
    }
}

//update the quantity of a particular product
module.exports.updateProduct=async (req,res)=>{
   const Id=req.params.id;
   try{
   const prod=await Product.findByIdAndUpdate(Id,{quantity:req.query.quantity});
   return res.send({product:prod,
message:"updatedSuccessfully"});
   }
   catch(err){
     return res.send("Error in updation");
   }

}