
const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Order = require("../models/order");
const Product=require("../models/product");

router.get('/',(req,res,next)=>{
    Order.find()
    .populate('product','name price')
    .execPopulate()
    .exec()
    .then((docs)=>{
        res.status(200).json(docs);
    });
});

router.get('/:orderId',(req,res,next)=>{
    const id=req.params.orderId;
    Order.findById(id)
    .select('_id quantity')
    .then(result=>{
        if(!result){
            res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json(result);
    });
});
router.post('/',(req,res,next)=>{
    const productId=req.body.productId;
    Product.findById(productId)/*Below is used to check whether 
                                the productId inside order exists in products collection*/
    .then(product=>{    /*If productId exists then save the order*/
        const order=new Order({
            product: product.productId,
            quantity: req.body.quantity
        });
        order.save()
        .then(result=>{
            console.log(result);
            res.status(201).json(result);
        });
    })
    .catch(err=>{   /*Else display the message*/
        res.status(500).json({
            message: "Product does not exists"
        });
    });
    
});

router.delete("/:orderId",(req,res,next)=>{
    const orderId=req.params.orderId;
    Order.deleteOne({_id: orderId})
    .then(result=>{
        if(result.deletedCount===0){
            res.status(404).json({
                message: "Order does not exists"
            });
        }
        res.status(200).json({
            message: "Order deleted",
            result: result
        });
    });
});

module.exports=router;