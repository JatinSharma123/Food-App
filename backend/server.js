import express from 'express'
import mongoose from 'mongoose';
import foodRouter from './routes/FoodRoutes.js';
import UserRouter from './routes/UseRoutes.js'
import cors from 'cors'
const app=express()
const URL ='mongodb://0.0.0.0:27017/foodApp'
app.use(express.json())
app.use(cors())
app.use("/api/food",foodRouter);
app.use("/api/user",UserRouter)




mongoose.connect(URL,()=>{
    console.log("Database connected")
})
app.listen(5000,()=>{

    console.log("Server is atarted on port 50000");
})