const express = require('express');
const router=express.Router();
const controller=require('../controllers/controller');

//Fetch products
router.get('/products',controller.getProducts);

//create product
router.post('/products/create',controller.createProduct);

//delete product
router.delete('/products/:id',controller.deleteProduct);

//update product quantity
router.post('/products/:id/update_quantity',controller.updateProduct);


module.exports=router;