
const express=require("express");
const router=express.Router(); /*router is a sub-package which has 
                                the capabilities to conviniently handle different routes, 
                                8to reach different endpoints with different HTTP words*/

/*Using Router() to register different routes*/

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling GET request"
    });
}); /*Here we won't write /products because the 
                /products route has been already forwarded to this file from app.js*/


router.get('/:productId',(req,res,next)=>{/*/:<express routing parameter>*/
    const id=req.params.productId;
    if(id==="special"){
        res.status(200).json({
            message:"Hii u got a special ID"
        });
    }
    else{
        res.status(200).json({
            message: "Aww sorry u are not special"
        });
    }
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling POST request"
    });
});

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling PATCH request"
    });
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling DELETE request"
    });
});


const express=require("express");
const router=express.Router(); /*router is a sub-package which has 
                                the capabilities to conviniently handle different routes, 
                                to reach different endpoints with different HTTP words*/

/*Using Router() to register different routes*/

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling GET request"
    });
}); /*Here we won't write /products because the 
                /products route has been already forwarded to this file from app.js*/


router.get('/:productId',(req,res,next)=>{/*/:<express routing parameter>*/
    const id=req.params.productId;
    if(id==="special"){
        res.status(200).json({
            message:"Hii u got a special ID"
        });
    }
    else{
        res.status(200).json({
            message: "Aww sorry u are not special"
        });
    }
});
router.post('/',(req,res,next)=>{
    const product={
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: "handling POST request",
        createdProduct: product
    });
});

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling PATCH request"
    });
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message: "handling DELETE request"
    });
});

module.exports=router;