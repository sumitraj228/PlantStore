import mongoose from "mongoose";

const plantSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,

});
const Plant=mongoose.model("Plant",plantSchema);

export default Plant;