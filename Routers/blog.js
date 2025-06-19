const express=require("express")
const router=express.Router()
const blogmodal=require("../Modals/blog")

router.get("/",async(req,res)=>{
    const result=await blogmodal.find()
    res.send(result)
})

router.post("/",async(req,res)=>{
    const newBlog=new blogmodal(req.body)
    const result=await newBlog.save()
    res.send(result)
})

router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await blogmodal.deleteOne(query) 
    res.send(result)
})


router.get("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await blogmodal.findOne(query)
    res.send(result)
})

router.put("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await blogmodal.updateOne(query,{$set:req.body})
    res.send(result)
})

module.exports=router