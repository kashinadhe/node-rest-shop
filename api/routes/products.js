
const express=require("express");
const router=express.Router(); /*router is a sub-package which has 
                                the capabilities to conviniently handle different routes, 
                                to reach different endpoints with different HTTP words*/
const Product=require("../models/product");

/*Using Router() to register different routes*/

router.get('/',(req,res,next)=>{
    Product.find()
    .select('_id name price')
    .then(docs=>{
        const response={
            count: docs.length,
            products: docs.map(doc=>{
                return{
                    _id: doc._id,
                    name: doc.name,
                    price: doc.price
                }
            })
        }
        res.status(200).json(response);
    })
}); /*Here we won't write /products because the 
    /products route has been already forwarded to this file from app.js*/

/*Displaying product details*/
router.get('/:productId',(req,res,next)=>{/*/:<express routing parameter>*/
    const id=req.params.productId;
    Product.findOne({_id: id})
    .then(result=>{
        if(result){

            res.status(200).json({
                name: result.name,
                price: result.price
            });
        }
        else{
            res.status(404).json({message: "Id does not exists!"});
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

/*Inserting new product to the products collection*/
router.post('/',(req,res,next)=>{
    const product=new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save();
    res.status(200).json({
        message: "handling POST request",
        createdProduct: product
    });
});

/*Updating product details*/
router.patch('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    const newPrice=req.body.newPrice;
    Product.updateOne({_id: id},{price: newPrice})
    .then(()=>{
        res.status(200).json({
            message: "Product price UPDATED"
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

/*Deleting products*/
router.delete('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    Product.deleteOne({_id: id})
    .then(()=>{
        res.status(200).json({message:"Product DELETED"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});

module.exports=router;