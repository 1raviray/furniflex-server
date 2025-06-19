const mongooge=require("mongoose")

const reviewschema=new mongooge.Schema({
    Reviewer_Id:String,
    ReviewerName:String,
    ReviewerMessage:String,
    value:String
})
module.exports=mongooge.model("reviews",reviewschema)