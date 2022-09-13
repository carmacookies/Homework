import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

export const ProductsModel = mongoose.model("products", ProductSchema)