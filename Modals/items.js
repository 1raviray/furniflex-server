const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    // _id: String,
    Category: String,
    ItemName: String,
    Discription: String,
    ImageURL: String,
    Rating: String,
    Color: String,
    Cost: String,
    Discount: String,
    Quantity:Number
});
module.exports = mongoose.model("items", itemSchema);
