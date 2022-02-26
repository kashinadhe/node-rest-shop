
const express = require("express");
const app=express();
const bodyParser=require("body-parser");
const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
const mongoose=require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin-kaustubh:Kashin12@cluster0.gf3u2.mongodb.net/nodeRestShopDB",{useNewUrlParser:true});


/*Anything starting with "/products" in the URL will be forwarded to products.js file*/
app.use('/products',productRoutes);
/*Forwarding orders route to orders.js*/
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error); /*next() is used to return the object to next function*/
});

app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;

