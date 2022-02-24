
const express=require("express");
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "Orders were fetched"
    });
});

router.get('/:orderId',(req,res,next)=>{
    const id=req.params.orderId;
    res.status(200).json({
        message: "Here is the order id: "+id
    });
});
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: "Orders were created"
    });
});


const express=require("express");
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "Orders were fetched"
    });
});

router.get('/:orderId',(req,res,next)=>{
    const id=req.params.orderId;
    res.status(200).json({
        message: "Here is the order id: "+id
    });
});
router.post('/',(req,res,next)=>{
    const order={
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: "Orders were created",
        order: order
    });
});


module.exports=router;