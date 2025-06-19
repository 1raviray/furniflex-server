const mongoose=require("mongoose")
const contactSchema=new mongoose.Schema({
    Name: String,
    Email: String,
    PNumber: String,
    Message: String
})

module.exports=mongoose.model("contacts",contactSchema)