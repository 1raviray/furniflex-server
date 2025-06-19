const express=require("express")
const router=express.Router()
const usersModal=require("../Modals/register")
const jwt=require("jsonwebtoken")
const middleware = require("./LoginMiddleware")

//Signup

router.get("/",async(req,res)=>{
    const result=await usersModal.find()
    res.send(result)
})

router.post("/",async(req,res)=>{
    const {Email,Phone}=req.body
    const exist=await usersModal.findOne({Email:Email} || {Phone:Phone})
    if(exist){
        res.send({status:false,message:"Email or Phone number already exists"})
    }else{
        const newreg=new usersModal(req.body)
        const result=await newreg.save()
        res.send({status:true,message:"success"})
    }
})

router.delete("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await usersModal.deleteOne(query) 
    res.send(result)
})


router.get("/myprofile", middleware, async(req,res)=>{
    const exists=await usersModal.findById(req.user._id)
    if(!exists){
        res.send("User not found")
    }else{
        res.send(exists)
    }
})

router.get("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await usersModal.findOne(query)
    res.send(result)
})

router.put("/:_id",async(req,res)=>{
    const query={_id:req.params._id}
    const result=await usersModal.updateOne(query,{$set:req.body})
    res.send(result)
})

//login

router.post("/login",async(req,res)=>{
    const {Email,Password}=req.body;
    const exists=await usersModal.findOne({Email:Email})
    if(!exists){
        res.send({status:false,message:"Email not exists"})
    }else if(exists.Password != Password){
        res.send({status:false,message:"Password is incorrect"})
    }else{
        let payload={
            user:{
                _id:exists._id
            }
        }
        const token=jwt.sign(payload,"furniflex",{expiresIn:"10m"});
        res.json({token})
    }
})


module.exports=router