import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://bhartilaxmi273:food123@cluster0.vkpyzjh.mongodb.net/food-del"),(() => console.log("DB connected"));
    
}