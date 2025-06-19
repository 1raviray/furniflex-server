const express=require("express")
const router=express.Router()
const registerModal=require("../Modals/items")

router.get("/",async(req,res)=>{
    const result=await registerModal.find()
    res.send(result)
})

router.post("/",async(req,res)=>{
    const newItem=new registerModal(req.body)
    const result=await newItem.save()
    res.send(result)
})

router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await registerModal.deleteOne(query)
    res.send(result)
})

router.get("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await registerModal.findOne(query)
    res.send(result)
})

router.put("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await registerModal.updateOne(query,{$set:req.body})
    res.send(result)
})




module.exports=router