const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    // _id: String ,
    Bloger: String ,
      BlogDate: String,
      BlogerImg: String,
      BlogContent: String,
      BlogImg: String,
      BlogTitle: String
})

module.exports=mongoose.model("blogs",blogSchema)