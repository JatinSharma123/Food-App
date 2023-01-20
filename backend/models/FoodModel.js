import mongoose from "mongoose";


const FoodSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
     category:{
         type: String,
         required: true
     },
     area:{
        type:String
     },
     price:{
         type: Number,
         required:true 
     },
     description:{
        type:String,
        required:true
     },
     image:{
        type:String,
        required:true
     }


})
const Food = mongoose.model("Food", FoodSchema);
export default Food;