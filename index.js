const express = require('express');
// console.log(express);
const app=express();

const port=process.env.PORT || 3000;
const db=require('./config/mongoose');

app.use(express.urlencoded({extended:true}));

 app.use('/',require('./routes/home'));

app.listen(port,(err)=>{
    if(err){
        console.log("Error is occuring");
    }
    else{
        console.log(`server is up and running at:${port}`);
    }
})