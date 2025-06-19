const express=require("express")
const router=express.Router()
const reviewModal=require("../Modals/reviews")
router.post("/",async(req,res)=>{
    const review=new reviewModal(req.body)
    const result=await review.save()
    res.send(result)
})
router.get("/",async(req,res)=>{
    const result=await reviewModal.find()
    res.send(result)
})
module.exports=router