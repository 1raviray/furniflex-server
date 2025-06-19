const express=require("express")
const router=express.Router()
const contactModal=require("../Modals/contact")

router.get("/",async(req,res)=>{
    const result=await contactModal.find()
    res.send(result)
})

router.post("/",async(req,res)=>{
        const newreg=new contactModal(req.body)
        const result=await newreg.save()
        res.send({status:true,message:"success"})
})


router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await contactModal.deleteOne(query) 
    res.send(result)
})

module.exports=router