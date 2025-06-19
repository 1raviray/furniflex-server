const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
  Door_no: { type: String },
  Street: { type: String },
  City: { type: String },
  Pincode: { type: String },
});

// Sub-schema for 'Data' field
const dataSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  Name: { type: String },
  Email: { type: String },
  Phone: { type: String },
  Password: { type: String },
  __v: { type: Number, default: 0 },
});

// Sub-schema for items in 'cartItems'
const cartItemSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  Category: { type: String },
  ItemName: { type: String },
  Discription: { type: String },
  ImageURL: { type: String },
  ImageURL1: { type: String },
  ImageURL2: { type: String },
  ImageURL3: { type: String },
  Rating: { type: String },
  Color: { type: String },
  Cost: { type: Number },
  Discount: { type: Number },
  Quantity: { type: Number },
});

// Main schema for the provided data
const mainSchema = new mongoose.Schema({
  details: { type: detailsSchema },
  selectedOption: { type: String },
  Data: { type: dataSchema },
  cartItems: { type: [cartItemSchema] },
  Price:{type:String}
});


module.exports = mongoose.model("orders", mainSchema);
