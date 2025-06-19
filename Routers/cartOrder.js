const express=require("express")
const router=express.Router()
const orderSchema=require("../Modals/cartOrder")

router.post("/",async(req,res)=>{
    await orderSchema(req.body).save()
    res.send({message:"success"})
})

router.get("/",async(req,res)=>{
    const result=await orderSchema.find()
    res.send(result)
})

module.exports=router