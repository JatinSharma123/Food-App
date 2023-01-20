import express from 'express'
import Food from '../models/FoodModel.js'
const router=express.Router()
import data from '../data.js'
router.post("/addFood",async(req,resp)=>{
   try {
       const { image, name, price, category,description } = req.body;
       if (!image || !name || !price || !category) {
           return resp.send({ 'message': "Field can't be empty" })
       }
       const food = await Food({image,name,price,category,description});
       await food.save();

       return resp.send("Food saved succesfully")
   } catch (error) {
       return resp.send({ 'message': "Error while adding food" })

   }
     
});

router.get("/dummy",async(req,resp)=>{
   const food=await Food.insertMany(data);
    
})

router.get("/getAllFoods", async (req, resp) => {
    try {
       
        const food = await Food.find();

        return resp.send(food)
    } catch (error) {
        return resp.send({ 'message': "Error while adding food" })

    }

});


export default router;